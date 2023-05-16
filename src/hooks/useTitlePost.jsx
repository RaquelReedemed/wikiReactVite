import { useEffect, useState } from "react";
import axios from "axios";

 export const useTitlePost = () => {

    const postRequest = async  (url, data) => {
        try{
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.log("error")
            throw error
        }

    }
    

return({
    postRequest
})
  
}; 


/* const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postTitle = async (title) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(urlLink, {
        sectionTitle: title,
      });

      console.log("Title created successfully:", response.data);

      setLoading(false);
    } catch (error) {
      console.log("Error creating title:", error);
      setError("Error creating title");
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(urlLink);

        console.log("Data fetched successfully:", response.data);

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [urlLink]);

  return { loading, error, data, postTitle }; */