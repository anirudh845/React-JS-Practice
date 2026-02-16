import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='h-full'>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:courseId' element={<CourseDetails />}/>
       </Routes>

       <Footer />
    </div>
  )
}

export default App
