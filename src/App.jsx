import React from 'react'
import Navbar from './Components/aboutus/Navbar'
import MainContent from './Components/aboutus/MainContent'
import "./Components/aboutus/MainContent.css"
import ServiceNavbar from './Components/Services/ServiceNavbar'
import ServiceContent from './Components/Services/ServiceContent'
function App() {

  return (
   <div className='backColor  text-white'>
        <Navbar />
        <MainContent />
        
   </div>
  )
}

export default App
