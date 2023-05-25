import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Carouseleq from './components/Carouseleq'
import Navbareq from './components/navbareq'
import Search from './components/search'
import Articulo from './pages/articulo'
import { Navbar } from 'react-bootstrap'
/* import CrearArticulo from './components/CrearArticulo' */
import CrearArticuloNew from './components/CrearArticuloNew'
import CrearCrear from './components/crearCrear'

function App() {
  
  return (
    <div>
      <Navbareq></Navbareq>
      {/*  <Search></Search>  */}
       {/*  <Carouseleq></Carouseleq>  */}
       {/* <Navbar></Navbar> */}
      {/*  <Articulo></Articulo> */}
      {/* <CrearArticulo></CrearArticulo>  */}
      {/* <CrearArticuloNew></CrearArticuloNew> */}
      <CrearCrear/>
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
