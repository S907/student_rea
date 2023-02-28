import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegisterForm from '../Components/Contact/RegisterForm'
import Login from '../Components/Contact/Login'
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import AllStudent from '../Components/Crud/AllStudent'
import AddStudent from '../Components/Crud/AddStudent'


function Routing() {
  return (
    <>
    
    <Router>
      <Nav />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/form' element={<RegisterForm />}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/crud' element={<AllStudent/>}></Route>
            <Route path='/add_user' element={<AddStudent/>}></Route>
        </Routes>
    </Router>
    
    </>
  )
}

export default Routing