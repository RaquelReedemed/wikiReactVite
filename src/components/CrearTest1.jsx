import { React, useState, useEffect }  from 'react';
import { useApi } from '../hooks/useApi';
import { useTitlePost } from '../hooks/useTitlePost';
import { useTitleGET } from '../hooks/useTitleGET';
import axios from 'axios';


const CrearArticuloNew = () => {

  /* obtener id de categorias */
  const { data: category } = useApi(`https://serviceone.onrender.com/api-wiki-ideas/categories`)
  console.log('CATEGORY', category)
  const [idCategory, setIdCategory] = useState(null);
  console.log('id categoria', idCategory)

   /* crear titulo */
  const { postRequest } = useTitlePost();
  const [inputValue, setInputValue] = useState('');
  console.log('input titulo', inputValue)

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

  /* envio de titulo tipeado en el input a la URL */    
      const url = "https://serviceone.onrender.com/api-wiki-ideas/section-titles"
      const data = {
        sectionTitle: inputValue
      };
/* try,atrapar errores y await para esperar la respuesta de que el titulo se agrego a la url */
      try{
       await postRequest(url, data);
       setLatestTitle(data.sectionTitle)
      /* setIdTitle(response.data._id) */

/*obtener listado de titulos actualizada con un .get */
       const response = await axios.get(url)
       const titlesWidthIds = response.data.sectionTitles
       console.log('id de titulos', titlesWidthIds)

/*comprueba si existen elementos en la url, luego se accede al ultimo (-1) y se guarda en lastTitle */
/*Tomar en cuenta que se obtiene el ULTIMO input agregado en el MOMENTO */      
       if(titlesWidthIds.length > 0) {
        const lastTitle = titlesWidthIds[titlesWidthIds.length - 1];
        const lastId = lastTitle._id;
        setIdTitle(lastId)
       }

    }catch(error) {
      console.log('error:', error)
      //manejar el error de manera adecuada
    } 
  };

  useEffect(() => {
    
    const handleGetTitles = async() => {
      const url = 'https://serviceone.onrender.com/api-wiki-ideas/section-titles';

      try{
        const response = await axios.get(url);
        console.log('Titles', response.data);

        //verificar si response.data es un array
      const titlesWidthIds = response.data.sectionTitles;

/* Una vez guardado en lasTitle el ultimo elemento ingresado en el input se extrae el ultimo */
       const lastTitle = titlesWidthIds.pop(); ///extraer el ultimo titulo del array
       const lastId = lastTitle._id  //obtener el _id del ultimo titulo
      console.log('Last ID:', lastId);
      setIdTitle(lastId)
      } 
      catch (error) {
        console.log('Error:', error);  
       } 
    };
    handleGetTitles();

  }, []);


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