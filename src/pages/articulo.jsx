import React from "react";

function Articulo() {
  return (
    <div>
      <section className="cuerpo1">
        {" "}
        {/* about */}
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

      <section className="cuerpo2"></section>

      <section className="cuerpo3"></section>

      <section className="cuerpo4"></section>

      <section className="cuerpo5"></section>

      <section className="cuerpo6"></section>

      <section className="cuerpo7"></section>
    </div>
  );
}

export default Articulo;
