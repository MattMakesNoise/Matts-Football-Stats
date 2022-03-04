import axios from "axios";
import { useEffect, useState } from 'react';
import {useDidMount} from "../Helpers/helpers";
import {optionsTable} from "../Helpers/endpoints"; 

const useFetchTable = () => {
    const [dataTable, setDataTable] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const didMount = useDidMount();

    const options = optionsTable;
    
    useEffect(() => {
        if(didMount) {
            console.log('First Render Table from Team Picker Component - API Called');
            axios.request(options).then(function (response) {
                setDataTable(response)
                // console.log(response.data);
            }).catch(function (error) {
                setError(error)
                console.error(error);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            console.log('Subsequent Render Table from Team Picker Component');
        }
    }, []);
    return didMount ? {dataTable, loading, error} : {dataTable, loading, error};
}


export default useFetchTable;