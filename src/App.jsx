import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, BrowserRouter as Router} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Rides from './pages/Rides'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/profile' element={<Profile></Profile>}/>
        <Route path='/rides' element={<Rides></Rides>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
