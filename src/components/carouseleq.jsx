import React, { useState, useEffect } from "react";
import "../css/style.css";
import { motion } from "framer-motion";
import axios from "axios";
//import Slider from 'react-slick'
//import  Carousel from 'react-elastic-carousel';
import { useApi } from "../hooks/useApi";
import LoaderDisenio from "../components/Loader/LoaderDisenio"
import Loader from "../components/Loader/Loader"

const Carouseleq = () => {
  //Funcion para cambio de estado
 /*  const [category, setCategory] = useState([""]); */
  //console.log(category);

  const { loading, data: category } = useApi(`https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory`)
  console.log(loading)
  console.log(category)

 
  return (
    <div className="contenedor-carousel">

{
            loading ? (
           <Loader cargando={LoaderDisenio}/>
            ) : (

              <motion.div className="slider-container">
        {/*div que contendra las propiedades y funcionalidades de motion*/}
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -177 }}
        >
          {/* contenedor div para las category */}

          
          {category.map((categorias) => {
            return (
              <motion.div className="cont-item">
                <p key={category._id}>{categorias.nameCategory}</p>
              </motion.div>
            );
          })}
          
        </motion.div>
      </motion.div>

            )
            

          }

      

      <div className="contenedor-NoCarousel">
      {category.map((categorias) => {
            return (
              <div className="item">
                <p key={category._id}>{categorias.nameCategory}</p>
              </div>
            );
          })}

      </div>
   


    </div>
  );
};

export default Carouseleq;

/*  //Funcion para llamar a la API
  useEffect(() => {
    //llamado asincronico de la API
    const obtenerCategory = async () => {
      const url = "https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory";
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });
     // console.log(result); //probar con sin await tambien
    //  console.log(result.data);
    console.log(result.data.data[0].nameCategory)

      setCategory(result.data.data);
    };
    obtenerCategory();
  }, []);
  console.log(category, "category"); //comprobar si trae el array del api
 */




/* 
            USANDO REACT SLASTIC
*/

/*
const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


 function Carouseleq() {
   
  //Funcion para cambio de estado
  const [category, setCategory] = useState(['']);
  console.log(category)

  //Funcion para llamar a la API
  useEffect(() => {
     
    //llamado asincronico de la API
    const obtenerCategory = async() => {
        const url = 'https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory';
        const result = await axios.get(url)
          .catch(error => {
            console.log(error)
          }); */
/*  console.log(result)  //probar con sin await tambien
          console.log(result.data) 
           console.log(result.data.Categorias)  */

/*          setCategory(result.data.Categorias)
    }
    obtenerCategory()
  }, []);
  console.log(category,'category') //comprobar si trae el array del api

  //console.log(category.map(function(categorias,i){return( {categorias})}),'map')
   
  return (
    <div className='carousel' >
   <Carousel breakPoints={breakPoints} className="contCarousel">
  {
    category.map((categorias, i) => {
      return(
       <div className='cajas'> <item className="item" key={i}>{categorias}</item></div>
        
      )
    })
   } 
  {
   </Carousel>
   
    </div>
  )
} 

export default Carouseleq */

/* 
            USANDO REACT SLICK
*/

/* function Carouseleq() {
     const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }; 

  return (
    <div>
      <Slider {...settings}> 
     <div className='card'>
      <h3>Hola1</h3>
    </div>
    <div className='card'>
      <h3>Hola2 Hola2 </h3>
    </div>
    <div className='card'>
      <h3>Hola3 Hola3 Hola3</h3>
    </div>
    <div className='card'>
      <h3>Hola4 Hola4 Hola4 Hola4</h3>
    </div>
    <div className='card'>
      <h3>Hola5 Hola5 Hola5 Hola5</h3>
    </div>
    <div className='card'>
      <h3>Hola6 Hola6 Hola6 Hola6</h3>
    </div>

      </Slider>


    </div>
  )
}

export default Carouseleq
 */
