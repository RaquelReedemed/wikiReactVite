import { React, useState, useEffect }  from 'react';
import { useApi } from '../hooks/useApi';
/* import { useSections } from '../hooks/useSections'; 
 */
import { useTitlePost } from '../hooks/useTitlePost';
import { useTitleGET } from '../hooks/useTitleGET';


const CrearArticuloNew = () => {

  /* obtener id de categorias */
  const { data: category } = useApi(`https://serviceone.onrender.com/api-wiki-ideas/categories`)
  console.log(category + 'CATEGORY')
  const [idCategory, setIdCategory] = useState(null);
  console.log(idCategory)

   /* crear titulo */
  const { postRequest } = useTitlePost();
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue)

  /* obtener titulos creados */
  const { data: listaTitulos } = useTitleGET(`https://serviceone.onrender.com/api-wiki-ideas/section-titles`)
  console.log(listaTitulos)
  console.log(idCategory)

  /* obtener ultimo titulo creado y id de titulo */
  const [latestTitle, setLatestTitle] = useState(null);
  console.log(latestTitle)
  const [idTitle, setIdTitle] = useState(null);
  console.log(idTitle)

  

  const handlePost = async () => {
    try{
      const url = "https://serviceone.onrender.com/api-wiki-ideas/section-titles"
      const data = {
        sectionTitle: inputValue
      };
      const response = await postRequest(url, data);
      console.log(response)
      setLatestTitle(data.sectionTitle)
      setIdTitle(response.data._id)

      

    }catch(error) {
      console.log(error)
    }

    
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };




  const handleIdCategory = (categoryId) => {
    /*  console.log(e.target.__reactFiber$n452bsfwr1.index) */
     setIdCategory(categoryId)
     console.log(categoryId)
  }




    return (
        <div className='container CrearArticulo'>

         {/* llamando a todas las categorias */}
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

       {/*  <input onChange={handleAgregarTitulo} type='text' value={title}/>
        <button onClick={handleSubmit}>guardar titulo</button>
{/*  */}


   {/* crear titulo */} 
  <div>
     <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handlePost}>Make POST Request</button>
    </div>
        
    {/* ver titulo */} 
       <p>titulo creado</p>
  
    {latestTitle && <p>{latestTitle}</p>}

    <p>id titulo</p>
    {idTitle && <p> id titulo {idTitle}</p>}

     

    
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