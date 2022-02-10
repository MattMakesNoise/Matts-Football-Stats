import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchTeams(url) {

    const [dataTeams, setDataTeams] = useState(null);
    const [loadingTeams, setLoadingTeams] = useState(false);
    const [errorTeams, setErrorTeams] = useState(null);
    
    useEffect(() => {
        setLoadingTeams(true);
        axios.get(url, {
            "headers": {
                "X-Auth-Token": "3223df46ecd443cfad1cc016a68f515a"
            },
        }).then((result) => {
            setDataTeams(result.data);
        }).catch((err) => {
            setErrorTeams(err);
        }).finally(() => {
            setLoadingTeams(false);
        })
    }, [url]);
    return {dataTeams, loadingTeams, errorTeams}
}

export default useFetchTeams;