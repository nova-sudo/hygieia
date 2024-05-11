// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the cors middleware
import nodemailer from 'nodemailer'; // Import Nodemailer for sending emails

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://hygieia:root@hygieia.ae3fifw.mongodb.net/hygieia', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  dateOfBirth: String, // Add date of birth field
  gender: String, // Add gender field
  location: String, // Add location field
  // Add other fields as needed
});

// Define Schema for Symptoms
const symptomSchema = new mongoose.Schema({
  username: String,
  symptomData: Object  // Assuming the symptom data is an object
});

// Define Schema for Appointments
const appointmentSchema = new mongoose.Schema({
  username: String,
  date: Date, // Date of appointment
  time: Date, // Time of appointment
});

// Define Schema
const prescriptionSchema = new mongoose.Schema({
  username: String,
  prescription: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  orderAvailable: Boolean // Add orderAvailable field to indicate if order is available
});



const User = mongoose.model('User', userSchema);
const Symptom = mongoose.model('Symptom', symptomSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const Prescription = mongoose.model('Prescription', prescriptionSchema);

// Signup route
app.post('/signup', (req, res) => {
  const { username, email, password, dateOfBirth, gender, location } = req.body;

  const newUser = new User({
    username,
    email,
    password,
    dateOfBirth,
    gender,
    location,
  });

  newUser.save()
    .then(() => res.status(201).json({ message: 'User created successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If username and password are correct, send a 200 OK response with a success message
    return res.status(200).json({ message: 'Login successful', user: user });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch symptom data
app.get('/symptoms', async (req, res) => {
  try {
    // Fetch all symptom documents from the database
    const symptoms = await Symptom.find();
    res.status(200).json(symptoms);
  } catch (error) {
    console.error('Error fetching symptom data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/save-symptoms', async (req, res) => {
  const { username, symptomData } = req.body;

  try {
    // Create a new Symptom document
    const newSymptom = new Symptom({
      username,
      symptomData
    });

    // Save the symptom data to the database
    await newSymptom.save();

    // Send a success response
    res.status(201).json({ message: 'Symptom data saved successfully' });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error('Error saving symptom data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Endpoint to set appointments for users
app.post('/set-appointments', async (req, res) => {
  try {
    // Fetch all usernames from the symptoms collection
    const symptomUsers = await Symptom.distinct('username');

    // Set the start time for appointments (9:00 AM)
    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0);

    // Iterate over each username and check if an appointment already exists
    for (const username of symptomUsers) {
      // Check if an appointment already exists for the user
      const existingAppointment = await Appointment.findOne({ username });

      if (!existingAppointment) {
        // If no appointment exists, create a new one
        const appointment = new Appointment({
          username,
          date: startTime.toISOString(), // Convert date to ISO string format
          time: startTime.toISOString(), // Start time of appointment
        });

        // Increment start time by 1 hour for the next appointment
        startTime.setHours(startTime.getHours() + 1);

        // Save the appointment to the database
        await appointment.save();
      }
    }

    // Send a success response
    res.status(201).json({ message: 'Appointments set successfully' });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error('Error setting appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Endpoint to fetch appointments
app.get('/appointments', async (req, res) => {
  try {
    // Fetch all appointments from the database
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to save prescription
app.post('/prescriptions', async (req, res) => {
  const { username, prescription } = req.body;

  try {
    // Create a new Prescription document with current timestamp
    const newPrescription = new Prescription({
      username,
      prescription,
      orderAvailable: true // Initially set orderAvailable to true
    });

    // Save the prescription data to the database
    await newPrescription.save();

    // Send a success response
    res.status(201).json({ message: 'Prescription saved successfully' });
  } catch (error) {
    // Send an error response if something goes wrong
    console.error('Error saving prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch prescriptions
app.get('/prescriptions', async (req, res) => {
  try {
    // Fetch all prescriptions from the database
    const prescriptions = await Prescription.find();
    res.status(200).json(prescriptions);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch prescriptions by username
app.get('/prescriptions/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // Find prescriptions associated with the provided username
    const prescriptions = await Prescription.find({ username });
    res.status(200).json(prescriptions);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Endpoint to send confirmation email
app.post('/send-email', async (req, res) => {
  const { username } = req.body;

  try {
    // Find the user by username to get the email
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a Nodemailer transporter using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'novaxaboud@gmail.com', // Replace with your Gmail email
        pass: 'Aboud246810_' // Replace with your Gmail password
      }
    });

    // Email options
    const mailOptions = {
      from: 'novaxaboud@gmail.com', // Replace with your Gmail email
      to: user.email,
      subject: 'Prescription Confirmation',
      text: `Dear ${username},\n\nYour prescription has been confirmed.\n\nBest regards,\nYour Pharmacy`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Confirmation email sent successfully' });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to update prescription order availability
app.put('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  const { orderAvailable } = req.body;

  try {
    // Update the prescription document with the provided ID
    const updatedPrescription = await Prescription.findByIdAndUpdate(id, { orderAvailable }, { new: true });

    if (!updatedPrescription) {
      return res.status(404).json({ error: 'Prescription not found' });
    }

    res.status(200).json(updatedPrescription);
  } catch (error) {
    console.error('Error updating prescription order availability:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
