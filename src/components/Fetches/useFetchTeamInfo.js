import { useEffect, useState } from 'react';
import axios from 'axios';
// import {optionsTeamInfo} from '../Fetches/endpoints';

const useFetchTeamInfo = () => {
    const [dataTeamInfo, setDataTeamInfo] = useState(33);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const optionsTeamInfo = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
        params: {id: '33'},
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': 'f70403a975msh4ae717f35387ed9p18ff5djsn9a1119e794e8'
        }
    };
    
    useEffect(() => {
        setLoading(true);
        axios.request(optionsTeamInfo).then((response) => {
            setDataTeamInfo(response.data); 
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setLoading(false);
        })
    }, []);
    return {dataTeamInfo, loading, error}
}

export default useFetchTeamInfo;