import './App.css'
import { Navigate, BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import PaginaAdmin from './pages/PaginaAdmin'
import Carrito from './pages/Carrito'
import ScrollPage from './pages/ScrollPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/paginaadmin' element={<PaginaAdmin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/carrito/:username' element={<Carrito />} />
        <Route path='/scrollpage' element={<ScrollPage />} />
      </Routes>
    </Router>
  )
}

export default App
