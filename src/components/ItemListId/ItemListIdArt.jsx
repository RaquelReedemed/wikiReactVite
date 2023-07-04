
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* import ItemListCatego from '../Categorias/ItemListCatego'; */
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ItemListArticulos from '../Articulos/ItemListArticulos';



const ItemListIdArt = ( ) => {
    

    const location = useLocation();
    console.log('location', location)

    const [sections, setSections] = useState([]);
    console.log('sections', sections)
    const { detail } = useParams();
    console.log('detail', detail)

    useEffect(() => {
        const obtenerSections = async () => {
          try {
            //cada elemento de mete en un array ["1", "2"]
            const sectionIds = detail.split(','); 
            console.log('sectionsIds',sectionIds)
            
            //cada elemento del array creado anterior se convierte en una promesa
            const sectionPromises = sectionIds.map((sectionId) => 
              axios.get(`https://serviceone.onrender.com/api-wikideas/sections/${sectionId}`)
            );
              console.log('sectionPromises', sectionPromises)
             
            //se espera a que se resuelvan las promesas y devuelve la respuesta o "result"
            const responses = await Promise.all(sectionPromises);
              console.log('responses', responses)

          //se extraen los datos de cada respuesta y se guarda en el array "sectionsData" 
            const sectionsData = responses.map((response) => response.data.section);
              console.log('sectionsData', sectionsData)

            setSections(sectionsData);
            
          } catch (error) {
            console.error(error);
          }
        };
      
        obtenerSections();
      }, [detail]);


    return (
        <div>

        <h1>ItemListIdArt</h1>

        <ItemListArticulos items={sections} lasSec={sections}/>
            
        </div>
    );
}

export default ItemListIdArt;
