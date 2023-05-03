import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Carouseleq from './components/carouseleq'
import Navbareq from './components/navbareq'
import Search from './components/search'
import Articulo from './pages/articulo'
import { Navbar } from 'react-bootstrap'
import CrearArticulo from './components/CrearArticulo'

function App() {
  
  return (
    <div>
      <Navbareq></Navbareq>
       <Search></Search> 
       <Carouseleq></Carouseleq> 
       {/* <Navbar></Navbar> */}
      {/*  <Articulo></Articulo> */}
     {/*  <CrearArticulo></CrearArticulo> */}
    </div>
  )
}

/* {window.location.pathname === "/" && (
  <>

  <MediaQuery maxDeviceWidth={768}>
  <BarraDeBusqueda />
  <Routes>
    <Route exact path='/search' element={<Search />} />
  </Routes>
</MediaQuery>
  <Carousel></Carousel>
  <ArticulosRecientes/>
  </>

{window.location.pathname === "/articulo" && (
  <>
  </>
)}
) }   */

export default App
