import '../css/style.css'

import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Navbareq() {


  //Funcion para Toggler
  const [active, setActive] = useState('navUl');

  const navHamb = () => {
    active === 'navUl'
    ? setActive('navUl navActive')
    : setActive('navUl')
  }

  //Funcion API

  const [category, setCategory] = useState(['']);

  //console.log(category);

  useEffect(() => {
    //funcion hace pedido asincronico, el async le avisa a la funcion que en algun momento tendr aun pedido asyncronico
   const obtenerCategory = async () => {
          const url = 'https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory';
          const result = await axios.get(url) //espera hasta que responda y trae el objeto
          .catch(error=>{
            console.log(error)
          });

         console.log(result.data.data[0].nameCategory)
         console.log(result.data.data)
        
          setCategory(result.data.data)

   }
   obtenerCategory()
  }, []);//vacio para que no entre en un loop infinito
 
  console.log(category); //cormprobando si trae el array de la api

   

 /*  const [data, setData] = useState(null); */

   //hook para hacer la peticion http
  /*  useEffect(() => {
      fetch("https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory") ///este link devuelve una promesa
        .then ((response) => response.json()) //cuando tengamos la respuesta pasarla a json
        .then((data) => setData(data));//
   }, []); //array vacio[], se ejecutara una vez cuando se llame el componente */

  
  
  return (
    <nav className='nav'>

        <ul className={active} >
    
      {
        category.map((categorias)=>{

          return(
           <div><li key={category._id}>{categorias.nameCategory}</li>
           </div>
          )
        })
      }
    </ul>   

     {/* <ul className={active}>
     <li>
      categorias={categorias}
     </li>
        {datos?.map((user) =>  // '?',se utiliza para evitar errores de que datos sea null 
      (<li className='navLi' key={user.id}>{user.categoria}</li>))}  
     </ul> */}
     <div onClick={navHamb} className='navToggler'>
     <div className= "line1"></div>
     <div className= "line2"></div>
     <div className= "line3"></div>
     {/* <i class="bi bi-grid-3x3-gap-fill"></i> */}
     </div>

     <div className='navLogo'><a  href='#'><img src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1678473595/wiki/logo_modoClaroMOBY_vlfjfi.jpg' alt='logo'></img></a></div>

    </nav> 
  )
}


export default Navbareq
