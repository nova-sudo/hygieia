import React, { useState } from 'react';
import Background from '../Background';
import {Link} from "react-router-dom"


const PaymentPage = () => {

    //all the data entered is stil not backended and an api for payment will be used 
  // State variables to store payment method and details
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending payment details to a server
    console.log('Payment method:', paymentMethod);
    console.log('Card number:', cardNumber);
    console.log('Expiry date:', expiryDate);
    console.log('CVV:', cvv);
    // Reset form fields
    setPaymentMethod('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (

    <div className="relative" class="transition-fade">
        <Background/>
        <div className=" bg-white rounded-lg  w-96   translate-y-24 container font-right mx-auto relative z-10 px-4 py-8">
      <h2 className="text-2xl text-black font-bold mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentMethod">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
            
          </select>
        </div>
        {paymentMethod && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                id="cardNumber"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter Card Number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                id="expiryDate"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                id="cvv"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV"
                required
              />
            </div>
          </>
        )}
        <Link to="/login"><button
          className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button></Link>
      </form>
    </div></div>
    
  );
};

export default PaymentPage;
