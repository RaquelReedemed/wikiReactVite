import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
//import { CircularProgress } from "@mui/material";
//import Box from "@mui/material";

function Articulo() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout( ()=>{
      setLoading(false)
    },5000)
  }, []);

  return (
    <div>
     {
      loading?
      <ClipLoader
        color={'#6b6868'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <div>


<section className="cuerpo1">
  <div className="row">
    <div className="iconos">
      <i class="fa-sharp fa-solid fa-arrow-left"></i>
      <div>
        <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1680466383/wiki/hamb-Lapiz_ohof43.jpg"></img>
      </div>
    </div>

    <div className="tituloArticulo">
      <h2>CSS y buenas practicas en desarrollo web</h2>
    </div>

    <div className="detalleArticulo">
      <p>
        CSS (Cascading Style Sheets) es una herramienta fundamental en el
        desarrollo de sitios web modernos. Permite separar la estructura y
        contenido de una página web de su presentación visual, lo que
        permite una mayor flexibilidad y control en términos de diseño.
        Sin embargo, como con cualquier herramienta, hay buenas prácticas
        que deben seguirse para garantizar un código de calidad y una
        experiencia de usuario óptima. En este artículo, revisaremos
        algunas de las mejores prácticas de CSS a seguir en el desarrollo
        web.
      </p>
    </div>
  </div>
</section>

<section className="cuerpo2">
  <div className="row">
    <div className="imagenArticulo">
      <div>
        <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
      </div>
    </div>

    <div className="detalle1">
      <h4>Organización y estructura</h4>
      <p>
        Una buena práctica para empezar es mantener una estructura
        organizada en su código CSS. Esto puede incluir dividir su código
        en secciones lógicas, agregar comentarios y utilizar una
        convención de nomenclatura fácil de entender. Al organizar su
        código, no solo será mucho más fácil de leer y mantener, sino que
        también ayudará a otros desarrolladores a entender su trabajo.
      </p>
    </div>
  </div>
</section>

<section className="cuerpo3">
  <div className="row">
    <div className="imagenCuerpo3">
      <div>
        <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
      </div>
    </div>

    <div className="detalleCuerpo3">
      <h4>Mantenga su CSS optimizado</h4>
      <p className="parrafoMobile">
        Si bien CSS es muy flexible, también puede ser muy pesado si no se
        usa adecuadamente. Para evitar esto, asegúrese de optimizar su
        código.
      </p>

      <p className="parrafoDesktop">
        Si bien CSS es muy flexible, también
        puede ser muy pesado si no se usa adecuadamente. Para evitar esto,
        asegúrese de optimizar su código. Esto puede incluir la
        eliminación de estilos no utilizados, la combinación de archivos
        CSS en uno solo y la reducción de las clases y los identificadores
        de CSS tanto como sea posible. La optimización de su código es
        esencial para reducir el tiempo de carga de su sitio y mejorar su
        experiencia de usuario.
      </p>
    </div>
  </div>

  <p className="parrafoMobile2">
      Esto puede incluir la eliminación de estilos no utilizados, la combinación de archivos CSS en uno solo y la reducción de las clases y los identificadores de CSS tanto como sea posible. La optimización de su código es esencial para reducir el tiempo de carga de su sitio y mejorar su experiencia de usuario.
      </p>
      
</section>

<section className="cuerpo4"></section>

<section className="cuerpo5"></section>

<section className="cuerpo6"></section>

<section className="cuerpo7"></section>
</div>
     }

    

    </div>
  );
}

export default Articulo;
