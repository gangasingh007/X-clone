import React from 'react'
import SignUp from './Components/SignUp'
import { Routes, Route } from "react-router-dom";
import './App.css'
import SignIn from './Components/SignIn';
import LandingPage from './Pages/LandingPage';


const App = () => {
  return (
    <>
     <div className="app-container">
     <Routes>
        <Route path = "/" element={<LandingPage/>}></Route>
        <Route path = "/signin" element={<SignIn/>}></Route>
        <Route path = "/signup" element={<SignUp/>}></Route>
      </Routes>
     </div>
    </>
  )
}

export default App