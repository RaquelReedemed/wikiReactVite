import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faX, faPlus } from '@fortawesome/free-solid-svg-icons';
/* import '../styles/crearArticulo.css' */

function CrearArticulo() {
  return (
    <div className='pagCrearArticulo'>

     <div className='navCrearArticulo'>
      <ul>
        <li><FontAwesomeIcon icon={faX}/> <span>Crear Articulo</span> </li>
       {/*  <li className='li-crearArticulo'>Crear Articulo</li> */}
       <li>
       <div className='contenedorBoton'>
       <div className='boton'>Publicar</div>  
      </div>
       </li>
      </ul>

      <div className='titulo'>
      <p>Titulo</p>
      <hr/><br className='linea'/>
     </div> 
     </div>{/* fin navCrearArticulo */}

      <div className='contenedor'>

      <div className='card'>

          <div className='contCirculo'>
            <FontAwesomeIcon icon={faPlus} id='cruz'/>
          </div>

      </div>

     </div> 


    </div>
  );
}

library.add(faHouse, faX, faPlus)

export default CrearArticulo;
