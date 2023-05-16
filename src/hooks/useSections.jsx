import { useEffect, useState } from "react";
import axios from "axios";

export const useSections = (urlLink) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(urlLink);
        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urlLink]);

  return { data, loading };
};
