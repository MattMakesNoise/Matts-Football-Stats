import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchFixtures(url) {

    const [dataFixtures, setDataFixtures] = useState(null);
    const [loadingFixtures, setLoadingFixtures] = useState(false);
    const [errorFixtures, setErrorFixtures] = useState(null);

    useEffect(() => {
        setLoadingFixtures(true);
        axios.get(url, {
            params: {
                to: '2022-06-30',
                season: '2021',
                league: '39',
                from: '2021-08-01',
                date: '2020-02-06'
            },
            headers: {
                'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
                'x-rapidapi-key': 'f70403a975msh4ae717f35387ed9p18ff5djsn9a1119e794e8'
            },
        }).then((result) => {
            setDataFixtures(result.dataFixtures);
        }).catch((err) => {
            setErrorFixtures(err);
        }).finally(() => {
            setLoadingFixtures(false);
        })
    }, [url]);
    return {dataFixtures, loadingFixtures, errorFixtures}

    // const options = {
    //     method: 'GET',
    //     url: 'https://api-football-beta.p.rapidapi.com/fixtures',
        
        
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });
}

export default useFetchFixtures;