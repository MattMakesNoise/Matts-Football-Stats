import { useEffect, useState } from 'react';
import axios from 'axios';
import { optionsTeamStats } from '../Helpers/endpoints';

const useFetchTeamStats = (id, teamName) => {
    const [dataTeamStats, setDataTeamStats] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
        params: {league: '39', season: '2021', team: id},
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    }
    
    useEffect(() => {
        if(localStorage.getItem(`apiTeamStats${teamName}`) === null) {
            console.log('First Render useFetchTeamStats from Stats component - API called');
            setLoading(true);
            axios(options).then((response) => {
                setDataTeamStats(response.data); 
            }).catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            console.log("API TeamStats DIDN'T get called, it's already in local storage!");
        }
        
    }, [id]);
    return {dataTeamStats, loading, error}
}

export default useFetchTeamStats;