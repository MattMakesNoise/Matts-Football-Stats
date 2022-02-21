import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../../App.css';
import useFetch from "../Fetches/useFetch";
import Header from "../Header/Header";
import styles from "./TeamPicker.module.css";

const TeamPicker = () => {
    const navigate = useNavigate();

    const [teamState, setTeamState] = useState(57);
    const [teamId, setTeamId] = useState(40);
    const pickTeam = (newTeam) => {
        setTeamState(newTeam);
    }

    const {dataTeamInfo, dataTable, dataFixtures, loading, error} = useFetch();
    let fetchedTeams;
    if(loading) return <div>Loading...</div>;

    if(error) console.log(error);

    if(dataTeamInfo) {
        console.log(dataTeamInfo.data.response)
        localStorage.setItem("apiTeamInfo", JSON.stringify(dataTeamInfo.data.response));
    }
    if(dataTable) {
        console.log(dataTable.data.response[0].league.standings)
        localStorage.setItem("apiTable", JSON.stringify(dataTable.data.response[0].league.standings));
    }
    if(dataFixtures) {
        console.log(dataFixtures.data.response)
        localStorage.setItem("apiFixtures", JSON.stringify(dataFixtures.data.response));
    }
    fetchedTeams = JSON.parse(localStorage.getItem("apiTeams"));
    const eplTeamIds = [57, 58, 402, 397, 328, 61, 354, 62, 341, 338, 64, 65, 66, 67, 68, 340, 73, 346, 563, 76];
    const eplTeams = fetchedTeams.filter(({id}) => eplTeamIds.includes(id));
    const goToTeam = (e) => {
        //1. Stop for submitting
        e.preventDefault();
        //2. Get the team name => look through eplTeams array and if value from select = objects id pull the team name
        let teamName;
        for(let i = 0; i < eplTeams.length; i++) {
            if(+teamState === eplTeams[i].id) {
                teamName = eplTeams[i].shortName; 
                setTeamId(eplTeams[i].id);
            }
        }
        //3. Change the page to /team/whatever-team-was-chosen using push state
        navigate(`/teams/${teamName}`);
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