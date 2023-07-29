import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Anidacion from '../components/Anidacion';

const Articulos1 = () => {

    //almanenar publicationId de pag categoria
    const { publicationId } = useParams()
    console.log('publicationId', publicationId)


    const [data, setData] = useState([]); //almacenar publications + nuevos atributos

   useEffect(() => {
     
    const obtenerDatos = async() => {

        //llamado a publications
        const url = 
          `https://serviceone.onrender.com/api-wikideas/publications`
        const result = await axios.get(url).catch((error) => {
            console.log(error)
        })   
       
        //funciones para obtener los atributos desde endpoint externos para cada publicacion
        const getDetailSection = async(id) => {
            const detailUrl=
             `https://serviceone.onrender.com/api-wikideas/sections/${id}`
            const detailResult = await axios.get(detailUrl)
            return detailResult.data
        }

        const getImageData = async(id) => {
            const imageEndPoint =
            `https://serviceone.onrender.com/api-wikideas/section-images/${id}`
            const imageResult = await axios.get(imageEndPoint)
            return imageResult.data
        }

        const getSectionTitle = async(id) => {
            const titleEndPoint =
            `https://serviceone.onrender.com/api-wikideas/section-titles/${id}`
            const titleResult = await axios.get(titleEndPoint)
            return titleResult.data
        }


        //resultado de llamado a publications
        const suggestedPublications = result.data.publications
        console.log('suggestedPublications', suggestedPublications)

    



        //Array para almacenar resultados de suggestedPublications y atributos llamados arriba
        const publicationsWithDetail = [];



        //Iterar a cada publications y obtener los atributos llamados
        for (const publication of suggestedPublications) {//publication, almacenara el valor de cada elemento
           /*  const detailIds = publication.detail */  //se obtiene el array detail
           
          //filtrar la publicacion por el publicationId
     if (publication.publicationId === publicationId) {
        const detailIds = publication.detail
        console.log('detailIds', detailIds)

         /* Obtener las sections de cada id . Recorrer cada id del array detailsIds */
         const detailPromises = detailIds.map(async(id) => {
            const detail = await getDetailSection(id);
            return detail
        })
        //Esperar a que todas las promesas de detailPromises se resuelvan
        const detailData = await Promise.all(detailPromises)
         /* console.log('detailData', detailData)  */



    /*  Obtener los datos de imagenes desde /sectios a /section-images */
        const imagePromises = detailData.map(async(detail) => {
            const imageData = await getImageData(detail.section.sectionImageId);
            return imageData.section
        })
        //Esperar a que todas las promesas de image se resuelvan
        const imagesData = await Promise.all(imagePromises)
        console.log('imagesData', imagesData)



    /*  Obtener titulos desde /sectios a /section-titles*/
        const titlePromises = detailData.map(async(detail) => {
            const titleData = await getSectionTitle(detail.section.sectionTitleId)
            return titleData.section
        })
        //Esperar a que todas las promesas de sectionTitles se resuelvan
        const sectionTitleData = await Promise.all(titlePromises)
        console.log('sectionTitle', sectionTitleData)



        //Asignado Images y Title a cada objeto llamado section dentro de detailData recorrido
           //index, la 1era iteracion (index=0) osea el 1er objeto de 'detailData' recibira el 1er elemento de imagesData y el primer elemento de sectionTitleData
         detailData.forEach((detail, index) => {
            detail.imagesData = imagesData[index];
            detail.sectionTitleData = sectionTitleData[index]
           
        })
        console.log('detailData', detailData)



        //Agregando publications y detailData

        publicationsWithDetail.push({
            ...publication,
            detailData
        })
        console.log('publicationsWithDetail', publicationsWithDetail)
        }

     }


   

        setData(publicationsWithDetail)

   
    }

    obtenerDatos()
    

   }, []);

    return (
        <div>

         {/*     <div className="tituloArticulo">
                 <h2 id="123">{data[0].topic}</h2> 
              </div> */}

            


            {
                data.map((publication, index) => (
                    
                    <section  className="cuerpo2" key={index}>
            <div className="row">
                   
                    <div className="imagenArticulo">
                
                {
                publication.detailData.map((detail) => (
                    <div>
                      <img src={detail.imagesData.sectionImage}></img>
                      </div>
                ))     

            } 
             
              </div>

              
              {
                publication.detailData.map((detail) => (
                    <div className="detalle1">

                  <h4> {detail.sectionTitleData.sectionTitle}</h4>      
                  </div>
                ))
            }   
              
            </div>
          </section> 
                ))
            }
             
              

        
            
        </div>

    );
}

export default Articulos1;
