import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.js'
import Login from './pages/login/login.js'
import Register from './pages/register/register.js'
import './App.css'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name={name} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setName={setName} />} />
          <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setName={setName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
