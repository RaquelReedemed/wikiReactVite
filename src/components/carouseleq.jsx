import React, { useState, useEffect } from "react";
import "../css/style.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useApi } from "../hooks/useApi";
import LoaderDisenio from "./Loader/LoaderDisenio"
import Loader from "./Loader/Loader"
import { Link } from "react-router-dom";
import { backendImage, datascienceImage, developerImage, diseñouxuiImage, frontendImage, programasIAImage, QAtestingmanualImage } from "../styles/assets/categoriesImg";


const Carouseleq = () => {

  /* llamado de API */
  const { loading, data: category } = useApi(`https://serviceone.onrender.com/api-wikideas/categories`)
  console.log(loading)
  console.log(category)

  // Objeto que mapea nombres de categoría con las imágenes correspondientes
  const categoryImages = {
    1: backendImage,
    2: datascienceImage,
    3: developerImage,
    4: diseñouxuiImage,
    5: frontendImage,
    6: programasIAImage,
    7: QAtestingmanualImage,
  };


 
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
              <motion.div 
              className="cont-item" key={categorias.categoryId + index}>
              <img
                  src={categoryImages[categorias.categoryId]}
                  alt={categorias.nameCategory}
                />
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
            <div className="item"
              key={categorias.categoryId}>
              <img
                  src={categoryImages[categorias.categoryId]}
                  alt={categorias.nameCategory}
                />
              <Link to={`/categorias/${categorias.nameCategory}/${categorias.categoryId}`}>
              {categorias.nameCategory}
              </Link>
            </div>
          );
        })}
      </div>
   


    </div>
  );
};

export default Carouseleq;