
import "../css/style.css";
import { motion } from "framer-motion";
import { useApi } from "../hooks/useApi";
import LoaderDisenio from "./Loader/LoaderDisenio"
import Loader from "./Loader/Loader"

const CarouselPagCrear = () => {

  /* llamado de API */
  const { loading, data: category } = useApi(`https://serviceone.onrender.com/api-wiki-ideas/categories`)
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
   
{/*  */}

    </div>
  );
};

export default CarouselPagCrear;


{/* <div className="contenedor-NoCarousel">
{category.map((categorias) => {
      return (
        <div className="item">
          <p key={category._id}>{categorias.nameCategory}</p>
        </div>
      );
    })}
</div> */}