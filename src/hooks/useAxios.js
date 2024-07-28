import React, { useEffect, useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useAxios = (url) => {
    const [response, setResponse] = useState([])
    const getData = async (extension) => {
        let res;
        if (typeof extension === 'object') {
            res = await axios.get(url);    
        } else {
            res = await axios.get(url + extension);
        }
        
        setResponse(response => [...response, { ...res.data, id: uuid() }]);
    }
    return [response, getData];
}

export default useAxios;