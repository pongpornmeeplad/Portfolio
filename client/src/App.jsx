import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpPage from './signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<SignUpPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
