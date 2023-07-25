
import React from 'react';
import UseSecTitlesGet from '../../hooks/useSecTitlesGet';


const ItemCardArticulos = ( {itemData, lasSec} ) => {
       console.log('itemData', itemData)
       console.log('sec',lasSec)

       const { data: titles } = UseSecTitlesGet('https://serviceone.onrender.com/api-wikideas/section-titles')
       console.log('titles', titles)

       const sectionTitle = 
        titles.find((title) => title.sectionTitleId === itemData.sectionTitleId)
       console.log('prueba', sectionTitle)

       //verificar si el indice actual esta en lasSec

     const currentIndex = lasSec.findIndex((sec) => sec.sectionId === itemData.sectionId)
      console.log('currentIndex', currentIndex) 

  
    return (
        <div>

        {
          currentIndex !== -1 && (
            <>
              {
                currentIndex % 2 === 0 
                ?
                (
                  <section  className="cuerpo2">
            <div className="row">
              <div className="imagenArticulo">
                <div>
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </div>
              </div>

              <div className="detalle1">
              <h4> {sectionTitle?.sectionTitle || null} </h4>
                  <p>{itemData.sectionDetail}</p>
              </div>
            </div>
          </section>  
                )
                :
                (
                  <section className="cuerpo4">
            <div className="row">
              <div className="detalleCuerpo4">
                <h4>{sectionTitle?.sectionTitle || null}</h4>
                <p className="parrafoMobile">
               {
                  itemData.sectionDetail
                  .split(' ')
                  .slice(0, 30)
                  .join(' ')
                }
              
                </p>

                <p className="parrafoDesktop">
                {itemData.sectionDetail}
                </p>
              </div>

              <div className="imagenCuerpo4">
                <div>
                  <img src="https://res.cloudinary.com/da5fzpyjp/image/upload/v1676654065/flores/pexels-photo-8350708_zn8pep.jpg"></img>
                </div>
              </div>
            </div>
            
            {
              itemData.sectionDetail.split(' ').length > 35 && (
                <p className="parrafoMobile4">
                {
                  itemData.sectionDetail
                  .split(' ')
                  .slice(30)
                  .join(' ')
                }
            </p>
              )
            }

            

          </section> 
                )
              }
            </>
          )
        }
 
        </div>
    );
}

export default ItemCardArticulos;


 