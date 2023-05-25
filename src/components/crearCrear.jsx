import React, { useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { useTitlePost } from '../hooks/useTitlePost';
import { useTitleGET } from '../hooks/useTitleGET';
import axios from 'axios';

const CrearCrear = () => {
  const { data: category } = useApi('https://serviceone.onrender.com/api-wiki-ideas/categories');
  const [idCategory, setIdCategory] = useState(null);
  const { data: listadoTitulos } = useTitleGET('https://serviceone.onrender.com/api-wikideas/section-titles');
  const [idTitle, setIdTitle] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [sectionContents, setSectionContents] = useState(['']);
  const [idCreatedSecciones, setIdCreatedSecciones] = useState([]);
  console.log('idCreatedSecciones', idCreatedSecciones);
  const [seccionBlocks, setSeccionBlocks] = useState([]);
  const [showSectionForm, setShowSectionForm] = useState(true);

  const handleIdCategory = (categoryId) => {
    setIdCategory(categoryId);
  };

  const handleSelect = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const nextIndex = selectedIndex + 1;
    if (nextIndex < listadoTitulos.length) {
      const nextId = listadoTitulos[nextIndex]._id;
      setIdTitle(nextId);
    } else {
      setIdTitle(null);
    }
    const selectTitle = e.target.value;
    setTitulo(selectTitle);
  };

  const handleContenido = (e, index) => {
    const value = e.target.value;
    setSectionContents((prevContents) => {
      const newContents = [...prevContents];
      newContents[index] = value;
      return newContents;
    });
  };

  const { postRequest } = useTitlePost();

  const handleSaveSection = async (index) => {
    const sectionContent = sectionContents[index];
    if (idTitle && sectionContent) {
      const postData = {
        sectionTitleId: idTitle,
        sectionDetail: sectionContent,
      };
      try {
        const response = await postRequest('https://serviceone.onrender.com/api-wikideas/sections/', postData);
        const lastId = response.idCreatedSection;
        setIdCreatedSecciones((prevState) => [...prevState, lastId]);
        const getUrl = `https://serviceone.onrender.com/api-wikideas/sections/${lastId}`;
        const getResponse = await axios.get(getUrl);
        console.log('Array de Seccion creada', getResponse.data);
      } catch (error) {
        console.error('Error al guardar la seccion:', error);
      }
    } else {
      console.log('No se puede guardar la seccion sin titulo y contenido');
    }
  };

  const handleAddSection = () => {
    setShowSectionForm(true);
    setSectionContents((prevContents) => [...prevContents, '']);
    setIdCreatedSecciones([]);
    setSeccionBlocks((prevBlocks) => [...prevBlocks, { id: prevBlocks.length + 1 }]);
  };

  useEffect(() => {
    setSeccionBlocks([{ id: 1 }]);
  }, []);

  return (
    <div className="container CrearArticulo">
      <h2>Seleccione Categoria</h2>
      <ul>
        {category.map((categorias) => (
          <li onClick={() => handleIdCategory(categorias._id)} key={categorias._id}>
            {categorias.nameCategory}
          </li>
        ))}
      </ul>
      <p>Id de la categoria {idCategory}</p>

      {seccionBlocks.map((block, index) => (
        <div key={block.id}>
          <h3>Seleccionar seccion</h3>
          {showSectionForm && (
            <div>
              <select onChange={handleSelect}>
                {listadoTitulos.map((listado) => (
                  <option key={listado._id} value={listado.sectionTitle}>
                    {listado.sectionTitle}
                  </option>
                ))}
              </select>
              <p>Seccion seleccionada: <b>{titulo}</b></p>
              <p>Id del titulo seleccionado: <b>{idTitle}</b></p>
              <textarea value={sectionContents[index]} onChange={(e) => handleContenido(e, index)}></textarea>
              <button onClick={() => handleSaveSection(index)}>Guardar Seccion</button>
              {idCreatedSecciones.map((id) => (
                <p key={id}>Id de seccion creada: {id}</p>
              ))}
            </div>
          )}
        </div>
      ))}

      <button onClick={handleAddSection}>Agregar otra sección</button>
    </div>
  );
};

export default CrearCrear;
