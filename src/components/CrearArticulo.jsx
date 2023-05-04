import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faX, faPlus } from '@fortawesome/free-solid-svg-icons';


function CrearArticulo() {
  return (
    <div className="pagCrearArticulo">
      <div className="navCrearArticulo">
        <ul>
          <li>
          <label for="btn-modal"><FontAwesomeIcon icon={faX} id="cerrar"/></label><span className="liCrear">Crear Articulo</span>{" "}
          </li>
          <li>
            <div className="contenedorBoton">
              <div className="boton">Publicar</div>
            </div>
          </li>
        </ul>

        <div className="titulo">
          <p>Titulo</p>
          <hr />
          <br className="linea" />
        </div>
      </div>
      {/* fin navCrearArticulo */}

      <div  className="dropdown">
        <ul className="menu-horizontal">
          <li className="li-categorias">Elegir Categorias
            <ul className="menu-vertical">
            <li>CSS</li>
            <li>HTML</li>
            <li>JavaScript</li>
            </ul>
          </li>
          
        </ul>

        <div className="contenedorBoton">
              <div className="boton">Subir imagen</div>
            </div>
      </div>

      <div className="contenedor">
        <div className="card">
          <div className="contCirculo">
            <FontAwesomeIcon icon={faPlus} id="cruz" />
          </div>
        </div>
      </div>
      {/* boton modal */}  {/*este boton se asocia con el input  */}
     {/*   <div className="boton-modal">
        <label for="btn-modal">
          {" "}
         
          Abrir Modal
        </label>
      </div> */} 
      {/* ventana modal */}
      <input type="checkbox" id="btn-modal"></input>{" "}
      {/* sirve para que el modal aparezca y desaparezca en el boton abrir modal */}
      <div className="container-modal">
        <did className="content-modal">
          <h4>¿Estas seguro de descartar el articulo?</h4>

          <div className="contenedorBotones">
          <div className="btn-cerrar">
            <label for="btn-modal">Cerrar</label>
          </div>
          <div className="btn-aceptar">
            <label for="btn-modal">Aceptar</label>
          </div>
          </div>
        </did>
         <label for="btn-modal" className="cerrar-modalPantalla"></label>

      </div> {/* fin modal */}
      
    </div>
  );
}

library.add(faHouse, faX, faPlus);

export default CrearArticulo;
