import React, { useState, useEffect } from "react";
import "../styles/articulo.css";
import "../styles/articulosMediasQueries.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

 {/*   <Box sx={{ display: 'flex' }}>
<CircularProgress />
</Box>  */}

function Articulos() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>

    
     <div>
          <section className="cuerpo1">
            <div className="row">
              <div className="iconos">
                {/*    <i class="fa-sharp fa-solid fa-arrow-left"></i> */}
                <div>
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1680466383/wiki/hamb-Lapiz_ohof43.jpg"></img>
                </div>
              </div>

              <div className="tituloArticulo">
                <h2>CSS y buenas practicas en desarrollo web</h2>
              </div>

              <div className="detalleArticulo">
                <p>
                  CSS (Cascading Style Sheets) es una herramienta fundamental en
                  el desarrollo de sitios web modernos. Permite separar la
                  estructura y contenido de una página web de su presentación
                  visual, lo que permite una mayor flexibilidad y control en
                  términos de diseño. Sin embargo, como con cualquier
                  herramienta, hay buenas prácticas que deben seguirse para
                  garantizar un código de calidad y una experiencia de usuario
                  óptima. En este artículo, revisaremos algunas de las mejores
                  prácticas de CSS a seguir en el desarrollo web.
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
                  organizada en su código CSS. Esto puede incluir dividir su
                  código en secciones lógicas, agregar comentarios y utilizar
                  una convención de nomenclatura fácil de entender. Al organizar
                  su código, no solo será mucho más fácil de leer y mantener,
                  sino que también ayudará a otros desarrolladores a entender su
                  trabajo.
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
                  Si bien CSS es muy flexible, también puede ser muy pesado si
                  no se usa adecuadamente. Para evitar esto, asegúrese de
                  optimizar su código.
                </p>

                <p className="parrafoDesktop">
                  Si bien CSS es muy flexible, también puede ser muy pesado si
                  no se usa adecuadamente. Para evitar esto, asegúrese de
                  optimizar su código. Esto puede incluir la eliminación de
                  estilos no utilizados, la combinación de archivos CSS en uno
                  solo y la reducción de las clases y los identificadores de CSS
                  tanto como sea posible. La optimización de su código es
                  esencial para reducir el tiempo de carga de su sitio y mejorar
                  su experiencia de usuario.
                </p>
              </div>
            </div>

            <p className="parrafoMobile2">
              Esto puede incluir la eliminación de estilos no utilizados, la
              combinación de archivos CSS en uno solo y la reducción de las
              clases y los identificadores de CSS tanto como sea posible. La
              optimización de su código es esencial para reducir el tiempo de
              carga de su sitio y mejorar su experiencia de usuario.
            </p>
          </section>

          <section className="cuerpo4">
            <div className="row">
              <div className="detalleCuerpo4">
                <h4>Utilice una metodología de CSS</h4>
                <p className="parrafoMobile">
                  Otra buena práctica es utilizar una metodología de CSS. Esto
                  implica seguir un conjunto de reglas y pautas para estructurar
                  y escribir su código CSS de manera consistente.
                </p>

                <p className="parrafoDesktop">
                  Otra buena práctica es utilizar una metodología de CSS. Esto
                  implica seguir un conjunto de reglas y pautas para estructurar
                  y escribir su código CSS de manera consistente. Las
                  metodologías más comunes son BEM, SMACSS y OOCSS. Al utilizar
                  una metodología de CSS, el equipo puede trabajar de manera más
                  efectiva y mantener un código CSS mucho más coherente.
                </p>
              </div>

              <div className="imagenCuerpo4">
                <div>
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </div>
              </div>
            </div>

            <p className="parrafoMobile4">
              Las metodologías más comunes son BEM, SMACSS y OOCSS. Al utilizar
              una metodología de CSS, el equipo puede trabajar de manera más
              efectiva y mantener un código CSS mucho más coherente.
            </p>
          </section>

          <section className="cuerpo5">
            <div>
              <div className="tituloCuerpo5">
                <h4>Considere la accesibilidad</h4>
              </div>

              <div className="ParrafoCuerpo5">
                <p>
                  Es importante tener en cuenta la accesibilidad en las
                  prácticas de CSS. El acceso debe incluir fuentes de tamaño
                  legible, altumetos en imagenes para que los usuarios que están
                  restringidos sin vista puedan entender lo que está pasando,
                  contraste entre textos y fondo para que usuarios con vista
                  limitada puedan leer correctamente.
                </p>
              </div>
            </div>
          </section>

          <section className="cuerpo6">
            <div className="row">
              <div className="imagenCuerpo6">
                <div>
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </div>
              </div>

              <div className="detalleCuerpo6">
                <h4>Verifique la compatibilidad del navegador</h4>
                <p className="parrafoMobile">
                  Finalmente, es importante verificar la compatibilidad del
                  navegador al escribir CSS. No todos los navegadores
                  interpretan el código CSS de la misma manera, lo que puede
                  llevar a diferencias de diseño y errores.
                </p>

                <p className="parrafoDesktop6">
                  Finalmente, es importante verificar la compatibilidad del
                  navegador al escribir CSS. No todos los navegadores
                  interpretan el código CSS de la misma manera, lo que puede
                  llevar a diferencias de diseño y errores. Al comprobar la
                  compatibilidad del navegador, puede asegurarse de que su sitio
                  web se vea igual en todos los navegadores.
                </p>
              </div>
            </div>

            <p className="parrafoMobile6">
              Al comprobar la compatibilidad del navegador, puede asegurarse de
              que su sitio web se vea igual en todos los navegadores.
            </p>
          </section>

          <section className="cuerpo7">
            <div className="ParrafoCuerpo7">
              <p>
                En resumen, CSS es una herramienta fundamental en la creación de
                sitios web modernos. Siguiendo estas buenas prácticas, puede
                asegurarse de que su código CSS sea de alta calidad y que su
                sitio web funcione sin problemas. Mantenga su código organizado
                y optimizado, utilice una metodología CSS, considere la
                accesibilidad y verifique la compatibilidad del navegador para
                mejorar la experiencia de su usuario.
              </p>
            </div>
          </section>

          <section className="temas">
            <div className="TemasRelacionados">
              <p>
                <b>Temas relacionados</b>
              </p>
            </div>

            <div className="box-container">
              <tr className="card">
                <td className="contImagen">
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </td>
                <td className="contTitulo">
                  <h6>Titulo</h6>
                </td>
                <td className="contParrafo">
                  <p>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </td>
                <td className="contBoton">
                  <button type="button" class="btn btn-secondary">
                    Ver mas
                  </button>
                </td>
              </tr>

              <tr className="card">
                <td className="contImagen">
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </td>
                <td className="contTitulo">
                  <h6>Titulo</h6>
                </td>
                <td className="contParrafo">
                  <p>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </td>
                <td className="contBoton">
                  <button type="button" class="btn btn-secondary">
                    Ver mas
                  </button>
                </td>
              </tr>

              <tr className="card">
                <td className="contImagen">
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </td>
                <td className="contTitulo">
                  <h6>Titulo</h6>
                </td>
                <td className="contParrafo">
                  <p>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </td>
                <td className="contBoton">
                  <button type="button" class="btn btn-secondary">
                    Ver mas
                  </button>
                </td>
              </tr>
            </div>
          </section>
        </div>

    
      
    </div>
  );
}

export default Articulos;
