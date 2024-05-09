  import React from "react"
  import { useEffect } from 'react';
  import { useCallback } from "react";
  import { Link,BrowserRouter,Routes, Route, Router } from 'react-router-dom';
  
  import Signup1 from './RegistrationComp/Signup1'
  import Signup2 from "./RegistrationComp/Signup2";
  import Signup3 from "./RegistrationComp/Signup3";
  import Login from './RegistrationComp/Login'
  import Home from './Home'
  import UserBackground from "./User/userBackground";
  import UserLanding from "./User/userLanding";
  import DocBackground from "./Doctor/DocBackground";
  import DocLanding from "./Doctor/DocLanding";
  import PhBackground from "./Pharma/PHBackground";
  import PhLanding from "./Pharma/PhLanding"; 
  import Choice from "./Choice";
  import UserOrderHist from "./User/UserOrderHist"
  import UserSymCheck from './User/UserSymCheck'
  import UserSymHist from "./User/UserSymHist"
  import UserCRUD from "./User/UserCRUD"
  import Appointments from "./Doctor/Appointments";
  import RequestsApproval from "./Doctor/RequestsApproval";
  import DoctorMessages from "./Doctor/DoctorMessages";
  import DrugPrescriptions from "./Pharma/DrugPrescriptions";
  import DocCRUD from "./Doctor/DocCRUD"
  import DrugHistory from "./Pharma/DrugHistory";
  import PhCRUD from "./Pharma/PhCRUD";
  import PharmacyInventory from "./Pharma/PharmacyInventory";
  import PaymentPage from "./User/PaymnetPage";
import './App.css';

  function App() {

    
      return (
        
           <BrowserRouter>
                 <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Signup1" element={<Signup1/>}/>
                  <Route path="/Signup2" element={<Signup2/>}/>
                  <Route path="/Signup3" element={<Signup3/>}/>
                  <Route path="/Login" element={<Login/>}/>
                  <Route path="/userBackground" element={<UserBackground/>}/>
                  <Route path="/userLanding" element={<UserLanding/>}/>
                  <Route path="/docBackground" element={<DocBackground/>}/>
                  <Route path="/docLanding" element={<DocLanding/>}/>
                  <Route path="/phBackground" element={<PhBackground/>}/>
                  <Route path="/phLanding" element={<PhLanding/>}/>
                  <Route path="/choice" element={<Choice/>}/>
                  <Route path="/userorderhist" element={<UserOrderHist/>}/>
                  <Route path="/usercrud" element={<UserCRUD/>}/>
                  <Route path="/usersymhist" element={<UserSymHist/>}/>
                  <Route path="/usersymcheck" element={<UserSymCheck/>}/>
                  <Route path="/appointments" element={<Appointments/>}/>
                  <Route path="/RequestsApproval" element={<RequestsApproval />}/>
                  <Route path="/DoctorMessages" element={<DoctorMessages />}/>
                  <Route path="/DrugPrescriptions" element={<DrugPrescriptions />}/>
                  <Route path="/doccrud" element={<DocCRUD/>}/>
                  <Route path="/DrugHistory" element={<DrugHistory />}/>
                  <Route path="/phcrud" element={<PhCRUD/>}/>
                  <Route path="/PharmacyInventory" element={<PharmacyInventory/>}/>
                  <Route path="/PaymentPage" element={<PaymentPage/>}/>
                

                 </Routes>
                 
                 
                
                 </BrowserRouter>
             
              
                 
                 
        
        
            
       
        
        
        
          
          
       
      );
  }

  export default App


  