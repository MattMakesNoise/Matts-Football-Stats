import React from 'react';
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

    return (
        <div className="App">
            <Header />
        <div className="App-body">
            <TeamBanner 
                fixtures={fixtures}
                team={team.teamName}
            />
        <div className='TableStats-wrapper'>
            <Table 
                standings={table}
            />
            <Stats 
                stats={teamInfo}
                team={team.teamName}
            />
        </div>
        </div>
            <Footer />
        </div>
    );
}

export default App;