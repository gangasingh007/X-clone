import React from 'react'
import SignUp from './Components/SignUp'
import { Routes, Route } from "react-router-dom";
import './App.css'
import SignIn from './Components/SignIn';
// import { signIn, signUp } from '../../backend/Controllers/auth.controller';

const App = () => {
  return (
    <>
     <div className="app-container">
     <Routes>
        <Route path = "/" element={<SignUp/>}></Route>
        <Route path = "/signin" element={<SignIn/>}></Route>
      </Routes>
     </div>
    </>
  )
}

export default App