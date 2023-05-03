import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const useApi = (urlLink) => {

    const [data, setData] = useState([""]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)

        //llamado asincronico de la API
        const obtenerCategory = async () => {
          const url = urlLink
          const result = await axios.get(url).catch((error) => {
            console.log(error);
          });
         /*  console.log(result.data.data[0].nameCategory); */
    
          setData(result.data.data);
          setLoading(false)
        };
        obtenerCategory();
      }, []);

    /*   console.log(category, "category"); */

    return ({data,
             loading})
}