import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../src/components/Fetches/useFetch";
import './App.css';
import Header from "./components/Header/Header";
import TeamBanner from './components/TeamBanner/TeamBanner';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/Loading/LoadingSpinner';

const App = () => {
    const {dataTeamInfo, dataFixtures, loading, error} = useFetch();
    let team = useParams(); 

    if(loading) return <LoadingSpinner />

    if(error) console.log(error);

    if(dataTeamInfo) {
        localStorage.setItem("apiTeamInfo", JSON.stringify(dataTeamInfo.data.response));
    }
    
    if(dataFixtures) {
        localStorage.setItem("apiFixtures", JSON.stringify(dataFixtures.data.response));
    }

    let teamInfo = JSON.parse(localStorage.getItem("apiTeamInfo"));
    let table = JSON.parse(localStorage.getItem("apiTable"));
    let fixtures = JSON.parse(localStorage.getItem("apiFixtures"));
    let teamId;

    for(let i = 0; i < table.length; i++) {
        if(team.teamName === table[i].team.name) {
            teamId = table[i].team.id;
        }
    }

    return (
        <div className="App">
            <Header />
        <div className="App-body">
            {fixtures && 
            <TeamBanner 
                fixtures={fixtures}
                team={team.teamName}
                id={teamId}
            />
            }
        <div className='TableStats-wrapper'>
            <Table 
                standings={table}
                id={teamId}
            />
            {teamInfo &&
            <Stats 
                stats={teamInfo}
                team={team.teamName}
                id={teamId}
            />
            }
        </div>
        </div>
            <Footer />
        </div>
    );
}

export default App;