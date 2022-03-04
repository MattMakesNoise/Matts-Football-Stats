import { useEffect, useState } from 'react';
import {useDidMountFetch} from "../Helpers/helpers";
import axios from 'axios';
import {optionsTeamInfo, optionsFixtures} from '../Helpers/endpoints';

const useFetch = () => {
    const [dataTeamInfo, setDataTeamInfo] = useState(null);
    const [dataFixtures, setDataFixtures] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const requestOne = axios.request(optionsTeamInfo);
    const requestTwo = axios.request(optionsFixtures);

    const didMount = useDidMountFetch();

    useEffect(() => {
        if (didMount) {
            console.log('First Render useFetch from App component - API called');
            setLoading(true);
            axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
                setDataTeamInfo(responses[0]);
                setDataFixtures(responses[1]); 
            })).catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            console.log('Subsequent Render useFetch from App component');
        }
    }, []);
    return {dataTeamInfo, dataFixtures, loading, error};
}

export default useFetch;