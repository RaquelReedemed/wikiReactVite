import { React, useState, useEffect }  from 'react';
import { useApi } from '../hooks/useApi';
import { useTitlePost } from '../hooks/useTitlePost';
import { useTitleGET } from '../hooks/useTitleGET';
import axios from 'axios';
import { text } from '@fortawesome/fontawesome-svg-core';


const CrearArticuloNew = () => {

    /* obtener id de categorias */
    const { data: category } = useApi(`https://serviceone.onrender.com/api-wiki-ideas/categories`)
    console.log('CATEGORY', category)
    const [idCategory, setIdCategory] = useState(null);
    console.log('id categoria', idCategory)

    const handleIdCategory = (categoryId) => {
      /*  console.log(e.target.__reactFiber$n452bsfwr1.index) */
       setIdCategory(categoryId)
       console.log(categoryId)
    }
  

  
  const { data: listadoTitulos } = useTitleGET(`https://serviceone.onrender.com/api-wiki-ideas/section-titles`)
  

  /* obtener id del titulo seleccionado */
  const [idTitle, setIdTitle] = useState(null);
  const [titulo, setTitulo] = useState(null);
  console.log('titulo seccion:',titulo)
  console.log('id de titulo', idTitle)
  
  const handleSelect = (e) => {
    const selectedIndex = e.target.selectedIndex; // Obtener el índice de la opción seleccionada
    const nextIndex = selectedIndex + 1; // Índice de la siguiente opción
    if (nextIndex < listadoTitulos.length) {
      const nextId = listadoTitulos[nextIndex]._id; // Obtener el _id del siguiente objeto
      setIdTitle(nextId); // Asignar el _id a idTitle
      console.log('id del siguiente objeto:', nextId);
    } else {
      setIdTitle(null); // Si no hay siguiente objeto, asignar null a idTitle
      console.log('No hay siguiente objeto');
    }

    const selectTitle = e.target.value;
    setTitulo(selectTitle)

    setShowTextArea(true)
    console.log(idTitle)
    setSectionContent(''); //resetea el contenido de texarea
  };

  /* Mostrando texArea */
  const [showTextArea, setShowTextArea] = useState(false);
  console.log("textArea", showTextArea)
  const [sectionContent, setSectionContent] = useState(''); //reset de textArea ante nuevo titulo select
  console.log('contenido', sectionContent) 
  console.log(sectionContent) 

  const handleContenido = (e) => {
    setSectionContent(e.target.value)
  }

  /* POST de id y texArea */

  const { postRequest } = useTitlePost()
  console.log('seccion guardada', postRequest)

  // Funcion para guardar contenido POST

  const handleSaveSection = async () => {
    //se crear cuerpo del URL
    if (idTitle && sectionContent) {
      const postData = {
        sectionTitleId: idTitle,
        sectionDetail: sectionContent
      };

      try{
       const response= await postRequest('https://serviceone.onrender.com/api-wiki-ideas/sections/', postData)
       console.log('seccion guardara:', response)
       console.log('id de seccion creada', response.idCreatedSection) 

       /*obtener listado de titulos actualizada con un .get */
       
       const lastId = response.idCreatedSection;
       const getUrl = `https://serviceone.onrender.com/api-wiki-ideas/sections/${lastId}`
       const getResponse = await axios.get(getUrl);
       console.log('Array de Seccion creada', getResponse)
       console.log('SECCION NUEVA', getResponse.data)

        //capturar error despues de guardar en el body (si aplica)
      }catch (error) {
        console.error('Error al guardar la seccion:', error)
      }
    }else {
      console.log('No se puede guardad la seccion sin titulo y contenido');
    }
  };

    return (
        <div className='container CrearArticulo'>

         {/* llamando a todas las categorias */}
        <h2>Seleccione Categoria</h2>
         <ul>
        {
          category.map((categorias) => {
            return(
              <li onClick={() => handleIdCategory(categorias._id)} key={categorias._id}>{categorias.nameCategory}</li>
            )
          })
        }
        </ul>

        <p>Id de la categoria {idCategory}</p>

        {/* Seleccion de Seccion y almacecado de id seccion */}
  
     <h3>Seleccionar seccion</h3>

     <select onChange={handleSelect}>
     {
      listadoTitulos.map((listado) => (
        <option key={listado._id} value={listado.sectionTitle}>{listado.sectionTitle}</option>
      ))
     }
     </select>

     <p>Seccion seleccionada:<b>{titulo}</b></p>
     <p>Id del titulo selccionado:<b>{idTitle}</b></p>

     {/* TexArea */}

     <div>
        <textarea 
          value={sectionContent}
          onChange={handleContenido}>
        </textarea>
     </div>

     {
      showTextArea && (
        <button onClick={handleSaveSection}>Guadar Seccion</button>
      )
     }

        
</div>
    );
}

export default CrearArticuloNew;


 /*  const { postTitle, data:titles } = useTitlePost(`https://serviceone.onrender.com/api-wiki-ideas/section-titles`)
  const [title, setTitle] = useState("");
  console.log(title) */
  

  /* const handleAgregarTitulo = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  } 

  const handleSubmit = () => {
    postTitle(title)
  } */



  /*  const { data: sections } = useSections(`https://serviceone.onrender.com/api-wiki-ideas/sections/641bc0de5afd03c02701d4ef`)
     console.log(sections)  */



/* import DropDown from '../components/DropDown';
import TextArea from '../components/TextArea';
import NuevoTextArea from '../components/NuevoTextArea';
import CarouselPagCrear from './CarouselPagCrear';
 */


{/* <div className='imgCont'>
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
       
         
         <CarouselPagCrear></CarouselPagCrear>
        
        <carousel></carousel>
      </div>

      <div className='dropMenu'>
        <DropDown/>
        <button className='butonsWithBg'>
          Subir imagen
        </button>
      </div>

      <TextArea/>
      <NuevoTextArea/> */}