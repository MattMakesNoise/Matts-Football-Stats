import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchTable(url) {

    const [dataTable, setDataTable] = useState(null);
    const [loadingTable, setLoadingTable] = useState(false);
    const [errorTable, setErrorTable] = useState(null);
    
    useEffect(() => {
        setLoadingTable(true);
        axios.get(url, {
            "headers": {
                "X-Auth-Token": "3223df46ecd443cfad1cc016a68f515a"
            },
        }).then((result) => {
            setDataTable(result.data);
        }).catch((err) => {
            setErrorTable(err);
        }).finally(() => {
            setLoadingTable(false);
        })
    }, [url]);
    return {dataTable, loadingTable, errorTable}
}

export default useFetchTable;