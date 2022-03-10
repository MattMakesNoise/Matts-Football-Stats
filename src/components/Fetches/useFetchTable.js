import axios from "axios";
import { useEffect, useState } from 'react';
import {optionsTable} from "../Helpers/endpoints"; 

const useFetchTable = () => {
    const [dataTable, setDataTable] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = optionsTable;
    
    useEffect(() => {
        if(localStorage.getItem("apiTable") === null) {
            axios.request(options).then(function (response) {
                setDataTable(response)
            }).catch(function (error) {
                setError(error)
                console.error(error);
            }).finally(() => {
                setLoading(false);
            })
        }
    }, []);
    return {dataTable, loading, error};
}

export default useFetchTable;