import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchTeamsTwo(url) {

    const [dataTeamsTwo, setDataTeamsTwo] = useState(null);
    const [loadingTeamsTwo, setLoadingTeamsTwo] = useState(false);
    const [errorTeamsTwo, setErrorTeamsTwo] = useState(null);
    
    useEffect(() => {
        setLoadingTeamsTwo(true);
        axios.get(url, {
            "headers": {
                'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
                'x-rapidapi-key': 'f70403a975msh4ae717f35387ed9p18ff5djsn9a1119e794e8'
            },
        }).then((result) => {
            setDataTeamsTwo(result.data);
        }).catch((err) => {
            setErrorTeamsTwo(err);
        }).finally(() => {
            setLoadingTeamsTwo(false);
        })
    }, [url]);
    return {dataTeamsTwo, loadingTeamsTwo, errorTeamsTwo}
}

export default useFetchTeamsTwo;