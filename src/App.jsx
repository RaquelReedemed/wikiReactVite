import { useState } from 'react'

import './App.css'
import Carouseleq from './components/Carouseleq'
import Navbareq from './components/navbareq'
import Search from './components/search'
import Articulo from './pages/articulo'
import { Navbar } from 'react-bootstrap'
/* import CrearArticulo from './components/CrearArticulo' */
import CrearArticuloNew from './components/CrearArticuloNew'
/* import CrearCrear from './components/crearCrear' */
/* import CrearCrearTest from './components/CrearCrearTest' */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio'
 import Categorias from './pages/Categorias' 
import ItemListIdArt from './components/ItemListId/ItemListIdArt'

function App() {
  
  return (

    <BrowserRouter>
    
      <Navbareq></Navbareq>

      <Routes>
      <Route exact path='/' element={<Inicio />} />
      {/*  <Search></Search>  */}
       {/*  <Carouseleq></Carouseleq>  */}
       {/* <Navbar></Navbar> */}
      {/*  <Articulo></Articulo> */}
      {/* <CrearArticulo></CrearArticulo>  */}
      {/* <CrearArticuloNew></CrearArticuloNew> */}
     {/*  <CrearCrear/> */}
  {/*    <CrearCrearTest/> */}
     <Route exact path='/categorias/:nameCategory/:categoryId' element={<Categorias />} /> 
     <Route exact path='/articulos/:detail' element={<ItemListIdArt/>}/>

     </Routes>

     
    </BrowserRouter>

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
