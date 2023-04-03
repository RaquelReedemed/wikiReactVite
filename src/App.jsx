import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Carouseleq from './components/carouseleq'
import Navbareq from './components/navbareq'
import Search from './components/search'
import Articulo from './pages/articulo'
import { Navbar } from 'react-bootstrap'

function App() {
  
  return (
    <div>
      {/* <Navbareq></Navbareq>
       <Search></Search> 
       <Carouseleq></Carouseleq>  */}
       {/* <Navbar></Navbar> */}
       <Articulo></Articulo>
    </div>
  )
}

export default App
