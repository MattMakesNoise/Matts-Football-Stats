import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import TeamBanner from './components/TeamBanner/TeamBanner';
import Table from './components/Table/Table';
import Stats from './components/Stats/Stats';
import Footer from './components/Footer/Footer';

const App = (props) => {
  const team = useParams();

  let fetchedTeams = JSON.parse(localStorage.getItem("apiTeams"));
  const eplTeamIds = [57, 58, 402, 397, 328, 61, 354, 62, 341, 338, 64, 65, 66, 67, 68, 340, 73, 346, 563, 76];
  // const fixturesIds = {

  // }
  const eplTeams = fetchedTeams.filter(({id}) => eplTeamIds.includes(id));

  let teamObject;

  for(let i = 0; i < eplTeams.length; i++) {
    if(team.teamName === eplTeams[i].shortName) {
      teamObject = eplTeams[i];
    }
  }


  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <TeamBanner 
          name={team.teamName}
          // fixturesId={}
        />
        <div className='TableStats-wrapper'>
          <Table />
          <Stats 
            address={teamObject.address}
            crest={teamObject.crestUrl}
            founded={teamObject.founded}
            stadium={teamObject.venue}
            website={teamObject.website}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;