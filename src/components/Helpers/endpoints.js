export const optionsTeamInfo = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    params: {league: '39', season: '2021'},
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
};

export const optionsFixtures = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {
        league: '39',
        season: '2021',
        from: '2021-07-01',
        to: '2022-07-01'
    },
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
};

export const optionsTable = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {season: '2021', league: '39'},
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
};