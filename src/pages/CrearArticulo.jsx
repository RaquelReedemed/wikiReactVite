import React from 'react';
import "../styles/crearArticulo.css";
import DropDown from '../components/DropDown';
import TextArea from '../components/TextArea';
import NuevoTextArea from '../components/NuevoTextArea';
import carousel from '../components/carousel';



const CrearArticuloNew = () => {
    return (
        <div className='container CrearArticulo'>
      <div className='imgCont'>
        <div className='buttonsContainer'>
          <i className="bi bi-x-lg "></i>
          <button className='butons fw-bold'>Crear articulo</button>
          <button className='butonsWithBg'>Publicar</button>
        </div>
          <textarea 
          defaultValue={"Titulo del artículo"} 
          className='imgText'
        /> 
      </div>

      <div className='carouselCont'>
        <h2 className='textCategoria'>Categorías</h2>
        {/* <Carousel/> */}
        <carousel></carousel>
      </div>

      <div className='dropMenu'>
        <DropDown/>
        <button className='butonsWithBg'>
          Subir imagen
        </button>
      </div>

      <TextArea/>
      <NuevoTextArea/>
</div>
    );
}

export default CrearArticuloNew;
