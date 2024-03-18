import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Login2 from './pages/login-again'
import Code from './pages/code'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/error' element={<Login2/>}/>
            <Route path='/login/auth' element={<Code/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}