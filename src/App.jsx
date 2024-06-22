import './App.css'
import { Navigate, BrowserRouter as Router} from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from  './pages/Home'
import PaginaAdmin from './pages/PaginaAdmin'
import Carrito from './pages/Carrito'
import ScrollPage from './pages/ScrollPage'
import ProductPage from './components/ProductPage'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/paginaadmin' element={<PaginaAdmin></PaginaAdmin>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path= '/carrito' element = {<Carrito></Carrito>}/>
        <Route path= '/scrollpage' element = {<ScrollPage></ScrollPage>}/>
        <Route path="/product" component={<ProductPage></ProductPage>} />
      </Routes>
    </Router>
    </>
  )
}

export default App