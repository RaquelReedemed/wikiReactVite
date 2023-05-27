import React, { useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { useTitlePost } from '../hooks/useTitlePost';
import { useTitleGET } from '../hooks/useTitleGET';
import axios from 'axios';


const CrearCrearTest = () => {
  // Obtener id de categorias
  const { data: category } = useApi(
    "https://serviceone.onrender.com/api-wikideas/categories"
  );
  const [idCategory, setIdCategory] = useState(null);


  const handleIdCategory = (categoryId) => {
    setIdCategory(categoryId);
  };


  // Seccion Titles
  const { data: listadoTitulos } = useTitleGET(
    "https://serviceone.onrender.com/api-wikideas/section-titles"
  );


  // Obtener id del Section title seleccionado
  const [idTitle1, setIdTitle1] = useState(null);
  const [titulo1, setTitulo1] = useState(null);


  const handleSelect1 = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const nextIndex = selectedIndex + 1;
    if (nextIndex < listadoTitulos.length) {
      const nextId = listadoTitulos[nextIndex]._id;
      setIdTitle1(nextId);
    } else {
      setIdTitle1(null);
    }


    const selectTitle = e.target.value;
    setTitulo1(selectTitle);


    setShowTextArea1(true);
    setSectionContent1("");
  };


  const [idTitle2, setIdTitle2] = useState(null);
  const [titulo2, setTitulo2] = useState(null);


  const handleSelect2 = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const nextIndex = selectedIndex + 1;
    if (nextIndex < listadoTitulos.length) {
      const nextId = listadoTitulos[nextIndex]._id;
      setIdTitle2(nextId);
    } else {
      setIdTitle2(null);
    }


    const selectTitle = e.target.value;
    setTitulo2(selectTitle);


    setShowTextArea2(true);
    setSectionContent2("");
  };


  // Mostrando texArea
  const [showTextArea1, setShowTextArea1] = useState(false);
  const [sectionContent1, setSectionContent1] = useState("");
  const [showTextArea2, setShowTextArea2] = useState(false);
  const [sectionContent2, setSectionContent2] = useState("");
  const [articleName, setArticleName] = useState("");


  const handleContenido1 = (e) => {
    setSectionContent1(e.target.value);
  };


  const handleContenido2 = (e) => {
    setSectionContent2(e.target.value);
  };


  const handleArticleName = (e) => {
    setArticleName(e.target.value);
  };


  // POST de id y texArea
  const { postRequest } = useTitlePost();


  const handleSaveSection = async () => {
    if (idTitle1 && sectionContent1 && idTitle2 && sectionContent2) {
      const postData1 = {
        sectionTitleId: idTitle1,
        sectionDetail: sectionContent1,
      };


      const postData2 = {
        sectionTitleId: idTitle2,
        sectionDetail: sectionContent2,
      };


      try {
        const response1 = await postRequest(
          "https://serviceone.onrender.com/api-wikideas/sections/",
          postData1
        );
        console.log("seccion 1 guardada:", response1);
        console.log("id de seccion 1 creada", response1.idCreatedSection);


        const response2 = await postRequest(
          "https://serviceone.onrender.com/api-wikideas/sections/",
          postData2
        );
        console.log("seccion 2 guardada:", response2);
        console.log("id de seccion 2 creada", response2.idCreatedSection);


        const lastId1 = response1.idCreatedSection;
        const lastId2 = response2.idCreatedSection;


        // Publicar artículo
        const publicationData = {
          topic: articleName,
          categoryId: idCategory,
          detail: [lastId1, lastId2],
        };


        try {
          const publicationResponse = await axios.post(
            "https://serviceone.onrender.com/api-wikideas/publications",
            publicationData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Artículo publicado:", publicationResponse.data);
        } catch (error) {
          console.error("Error al publicar el artículo:", error);
        }
      } catch (error) {
        console.error("Error al guardar las secciones:", error);
      }
    } else {
      console.log("No se pueden guardar las secciones sin título y contenido");
    }
  };


  return (
    <div className="container CrearArticulo">
      {/* llamando a todas las categorias */}
      <div>
        <input
          type="text"
          value={articleName}
          onChange={handleArticleName}
          placeholder="Nombre del artículo"
        />
      </div>
      <h2>Seleccione Categoria</h2>
      <ul>
        {category.map((categorias) => {
          return (
            <li
              onClick={() => handleIdCategory(categorias._id)}
              key={categorias._id}
            >
              {categorias.nameCategory}
            </li>
          );
        })}
      </ul>


      <p>Id de la categoria {idCategory}</p>


      {/* Seleccion de Seccion y almacenado de id seccion */}
      <h3>Seleccionar seccion 1</h3>
      <select onChange={handleSelect1}>
        {listadoTitulos.map((listado) => (
          <option key={listado._id} value={listado.sectionTitle}>
            {listado.sectionTitle}
          </option>
        ))}
      </select>
      <p>
        Seccion seleccionada:<b>{titulo1}</b>
      </p>
      <p>
        Id del titulo seleccionado:<b>{idTitle1}</b>
      </p>


      <h3>Seleccionar seccion 2</h3>
      <select onChange={handleSelect2}>
        {listadoTitulos.map((listado) => (
          <option key={listado._id} value={listado.sectionTitle}>
            {listado.sectionTitle}
          </option>
        ))}
      </select>
      <p>
        Seccion seleccionada:<b>{titulo2}</b>
      </p>
      <p>
        Id del titulo seleccionado:<b>{idTitle2}</b>
      </p>


      {/* TexArea */}
      <div>
        <textarea value={sectionContent1} onChange={handleContenido1}></textarea>
      </div>


      <div>
        <textarea value={sectionContent2} onChange={handleContenido2}></textarea>
      </div>


      {(showTextArea1 || showTextArea2) && (
        <button onClick={handleSaveSection}>Guardar Secciones</button>
      )}
    </div>
  );
};


export default CrearCrearTest;