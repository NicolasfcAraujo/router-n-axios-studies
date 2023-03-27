import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Disconnected from './pages/Disconnected/Disconnected'
import Login from './pages/Login/Login'
import Users from './pages/Users/Users'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Disconnected/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='users' element={<ProtectedRoute>
            <Users/>
          </ProtectedRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
