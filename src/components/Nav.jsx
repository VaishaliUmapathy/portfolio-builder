import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/socail.css'
import Navbar from './Navbar'
import Login from './Login';
import Signup from './Signup';
import Messages from './Messages';
import PostCard from './PostCard'
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/"  element={
            <>
                <Navbar />
            </>
            }
             />
             <Route path="posts" element={<PostCard/>}/>
             <Route path="/messages" element={<Messages/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
  )
}

export default App