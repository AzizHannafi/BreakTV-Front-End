import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from '../Components/Header'
import Home from '../Components/Home'
import TvShow from '../Components/TvShow'
import Movies from '../Components/Movies'
import Footer from '../Components/Footer'

function AppRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
           <Route path='/' element={<Home/>}/>
            <Route path='/tvshows' element={<TvShow/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRoutes