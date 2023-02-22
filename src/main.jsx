import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Project'
import Music from './Music'
import Tracks from './Tracks'
import Contact from './Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Projects />
    <Music />
    <Tracks />
    <Contact />
  </React.StrictMode>,
)
