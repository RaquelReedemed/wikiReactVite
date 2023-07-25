import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import '../styles/Categorias.css';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TitleContext } from "../context/TitleContext";

function Categorias() {

  //seleccionar Titulo topic para ItemListIdArt
  const { setSelectedTitle } = useContext(TitleContext)

  const handleTitleClick = (title) => {
    setSelectedTitle(title)
  }

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
        <div className='categorias-card' key={card.indexOf}>
          <img src={card.imagen} alt={card.Topic} />
          <Link to={`/articulos/${card.detail}`} onClick={() => handleTitleClick(card.topic)}>
          Título: {card.topic}
          </Link>
          <p>Descripción: {card.detail}</p>
        </div>
      ))}
    </div>

    </>
  );
}

export default Categorias;
