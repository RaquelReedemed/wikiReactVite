import React, { useState, useEffect} from "react";
import axios from "axios";
import '../styles/Categorias.css';
import { useParams } from 'react-router-dom';

function Categorias() {
   const { nameCategory, categoryId } = useParams();
   console.log('useParams', categoryId)

  const [cardCategory, setCardCategory] = useState([""]);
  //console.log(category);


  //Funcion para llamar a la API
  useEffect(() => {
    //llamado asincronico de la API

    const obtenerCardCategory = async () => {
      const url = `https://serviceone.onrender.com/api-wikideas/publications-by-id-category/${categoryId}`;
      console.log('url', url)
      const result = await axios.get(url).catch((error) => {
        console.log(error);
      });
      console.log('idByCategory',result.data)

      setCardCategory(result.data);
    };
    obtenerCardCategory();
  }, [categoryId]);
   

  return (
    <>
   
      {/* Aquí se renderiza el banner */}
      <div className='container-banner'>
        <h1>Categoria: {nameCategory} </h1>
      </div> 

      {/* Aquí se renderizan las cards horizontales */}
     <div className='categorias-container__cards'>
      {cardCategory.map(card => (
        <div className='categorias-card' key={card.categoryId}>
          <img src={card.imagen} alt={card.Topic} />
          <h2>Título: {card.topic}</h2>
          <p>Descripción: {card.detail}</p>
        </div>
      ))}
    </div> 

    </>
  );
}

export default Categorias;
