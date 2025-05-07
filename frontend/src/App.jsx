import React from 'react'
import SignUp from './Components/SignUp'
import { Routes, Route } from "react-router-dom";
import './App.css'
import SignIn from './Components/SignIn';
// import AuthenticationScreen from './Screens/AuthenticationScreen';
import LandingPage from './Screens/LandingPage';


const App = () => {
  return (
    <>
     
     
      <LandingPage/>
    
      <Routes>
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
          </Routes>
    </>
  )
}

export default App