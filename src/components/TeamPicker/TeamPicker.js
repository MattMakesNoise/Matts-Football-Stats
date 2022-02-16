import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../../App.css';
import useFetchTeams from "../Fetches/useFetchTeams";
import Header from "../Header/Header";
import styles from "./TeamPicker.module.css";

const TeamPicker = () => {
    const navigate = useNavigate();
    const [teamState, setTeamState] = useState(57);
    const [teamIdFixtureState, setteamIdFixtureState] = useState(42);
    const pickTeam = (newTeam) => {
        setTeamState(newTeam);
        setteamIdFixtureState(newTeam);
    }

    const {dataTeams, loadingTeams, errorTeams} = useFetchTeams("http://api.football-data.org/v2/teams");
    let fetchedTeams;
    if(loadingTeams) return <div>Loading...</div>;

    if(errorTeams) console.log(errorTeams);

    if(dataTeams) {
        localStorage.setItem("apiTeams", JSON.stringify(dataTeams.teams));
    }
    fetchedTeams = JSON.parse(localStorage.getItem("apiTeams"));
    const eplTeamIds = [57, 58, 402, 397, 328, 61, 354, 62, 341, 338, 64, 65, 66, 67, 68, 340, 73, 346, 563, 76];
    const eplTeams = fetchedTeams.filter(({id}) => eplTeamIds.includes(id));
    console.log(eplTeams);
    const goToTeam = (e) => {
        //1. Stop for submitting
        e.preventDefault();
        //2. Get the team name => look through eplTeams array and if value from select = objects id pull the team name
        let teamName;
        for(let i = 0; i < eplTeams.length; i++) {
            if(+teamState === eplTeams[i].id) {
                teamName = eplTeams[i].shortName;
                let teamId = eplTeamIds[i];
                console.log(teamId); 
            }
        }
        //3. Change the page to /team/whatever-team-was-chosen using push state
        navigate(`/teams/${teamName}`);
        console.log(teamName);
    }
    

    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.AppBody}>
                <div className={styles.AppBodyInner}>
                    <div className={styles.teamPickWrap}>
                        <h2>Pick A Team</h2>
                        <form action="" onSubmit={(e) => goToTeam(e)}>
                            <select onChange={(e) => {pickTeam(e.target.value)}} value={teamState}>
                                <option value={57}>Arsenal</option>
                                <option value={58}>Aston Villa</option>
                                <option value={402}>Brentford</option>
                                <option value={397}>Brighton and Hove</option>
                                <option value={328}>Burnley</option>
                                <option value={61}>Chelsea</option>
                                <option value={354}>Crystal Palace</option>
                                <option value={62}>Everton</option>
                                <option value={341}>Leeds</option>
                                <option value={338}>Leicester</option>
                                <option value={64}>Liverpool</option>
                                <option value={65}>Manchester City</option>
                                <option value={66}>Manchester United</option>
                                <option value={67}>Newcastle</option>
                                <option value={68}>Norwich</option>
                                <option value={340}>Southampton</option>
                                <option value={73}>Tottenham</option>
                                <option value={346}>Watford</option>
                                <option value={563}>West Ham</option>
                                <option value={76}>Wolves</option>
                            </select>
                            <button type="submit">Go to team!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamPicker;