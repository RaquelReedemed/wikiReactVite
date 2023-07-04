

import { useState, useEffect } from "react";
import axios from "axios";

const UseSectionTitlesGet = (urllink) => {

    const [data, setData] = useState([""]);
   
   useEffect(() => {

    const obtenerTitles = async () => {

        const url = urllink

        const result = await axios.get(url).catch((error) => {
            console.log(error)
        });
        console.log(result.data.sectionTitles)

        setData(result.data.sectionTitles)
    };

    obtenerTitles()
   
   },[urllink]);

   return ({
    data
    });
}

export default UseSectionTitlesGet;
