import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeProvider';
import Spinner from '../components/Spinner';
import MediaQuery from 'react-responsive';
import BarraDeBusqueda from '../components/BarraDeBusqueda';
import ArticulosRecientes from '../components/ArticulosRecientes';

/* import Carousel from '../components/Carousel' */
import Carousel from '../components/carousel';
import ArticulosPopulares from '../components/ArticulosPopulares';
/* import CrearArticulo from './CrearArticulo'; */

/* import ArticulosPopulares from '../components/ArticulosPopulares'; */

import "../styles/Inicio.css";
/* import Carousel from "../components/carousel"; */
import CrearArticuloNew from './CrearArticuloNew';
/* import CrearArticulo from './CrearArticulo'; */
import CarouselCrearArticulo from '../components/CarouselCrearArticulo';




function Inicio() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme, toggleTheme, themeName } = useTheme();

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false); 
    }, 0);
  }, []);

  return (
  <>
    {isLoading ? (
        <Spinner /> 
      ) : (

    <div className='Inicio' id={theme} >
      <MediaQuery maxDeviceWidth={768}>
        <BarraDeBusqueda />
      </MediaQuery>

      <MediaQuery minDeviceWidth={768}>
        <div className='container-banner_inicio'>
          <div className='banner-text'>
            <h1>Tu enciclopedia virtual IT</h1>
            <h3>Una guía completa y actualizada sobre el mundo. <br /> Explora, aprende  y desarrolla.</h3>
          </div>
          <div className='banner-img'>
            <p>El modo actual es: "{themeName}"</p>
            <button onClick={toggleTheme} >Cambiar modo</button>
          </div>
        </div>
      </MediaQuery>
       <CarouselCrearArticulo/>
       <Carousel/> 
      <ArticulosRecientes/>
      <ArticulosPopulares/> 
      {/* <CrearArticuloNew/> */}
      
    </div>
    )}
  </>
  );
}

export default Inicio;


