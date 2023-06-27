import React, { useState, useEffect } from "react";
import "../css/style.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useApi } from "../hooks/useApi";
import LoaderDisenio from "./Loader/LoaderDisenio"
import Loader from "./Loader/Loader"
import { Link } from "react-router-dom";

const Carouseleq = () => {

  /* llamado de API */
  const { loading, data: category } = useApi(`https://serviceone.onrender.com/api-wikideas/categories`)
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
              <motion.div 
              className="cont-item">
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