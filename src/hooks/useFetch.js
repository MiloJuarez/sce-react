import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await axios(url);
        setData(response.data.data);
    }
    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [url]);

    return data;
};

export default useFetch;
