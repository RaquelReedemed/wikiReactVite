import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const useTitleGET = (urlLink) => {

    const [data, setData] = useState([""]);
    const [loading, setLoading] = useState(true);
    console.log(data)
    
    useEffect(() => {
        setLoading(true)

        //llamado asincronico de la API
        const obtenerTitle = async () => {
          const url = urlLink
          const result = await axios.get(url).catch((error) => {
            console.log(error);
          });
          console.log(result)
         /*  console.log(result.data.data[0].nameCategory); */
    
          setData(result.data.sectionTitles); 
           console.log(result)
        

          setLoading(false)
        };
        obtenerTitle();
      }, []);

    /*   console.log(category, "category"); */

    return ({data,
             loading})
}