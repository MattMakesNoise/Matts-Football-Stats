import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import useFetch from "../src/components/Fetches/useFetch";
import './App.css';
import Header from "./components/Header/Header";
import TeamBanner from './components/TeamBanner/TeamBanner';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';

const App = () => {
    // const {dataTeamInfo, dataTable, dataFixtures, loading, error} = useFetch();
        
    // if(loading) return <div>Loading...</div>;

    // if(error) console.log(error);

    // if(dataTeamInfo) {
    //     console.log(dataTeamInfo.data.response)
    //     localStorage.setItem("apiTeamInfo", JSON.stringify(dataTeamInfo.data.response));
    // }
    // if(dataTable) {
    //     console.log(dataTable.data.response[0].league.standings)
    //     localStorage.setItem("apiTable", JSON.stringify(dataTable.data.response[0].league.standings));
    // }
    // if(dataFixtures) {
    //     console.log(dataFixtures.data.response)
    //     localStorage.setItem("apiFixtures", JSON.stringify(dataFixtures.data.response));
    // }
    const team = useParams();
    let teamInfo = JSON.parse(localStorage.getItem("apiTeamInfo"));
    let table = JSON.parse(localStorage.getItem("apiTable"));
    let fixtures = JSON.parse(localStorage.getItem("apiFixtures"));
    // let teamId = useState(id: teamId);
    let teamId;

    for(let i = 0; i < teamInfo.length; i++) {
        if(team.teamName === teamInfo[i].team.name) {
            teamId = teamInfo[i].team.id;
        }
    }

    return (
        <div className="App">
            <Header />
        <div className="App-body">
            <TeamBanner 
                fixtures={fixtures}
                team={team.teamName}
                id={teamId}
            />
        <div className='TableStats-wrapper'>
            <Table 
                standings={table}
                id={teamId}
            />
            <Stats 
                stats={teamInfo}
                team={team.teamName}
                id={teamId}
            />
        </div>
        </div>
            <Footer />
        </div>
    );
}

export default App;