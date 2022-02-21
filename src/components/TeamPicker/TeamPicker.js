import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../../App.css';
import useFetchTeamInfo from "../Fetches/useFetchTeamInfo";
import Header from "../Header/Header";
import styles from "./TeamPicker.module.css";

const TeamPicker = () => {
    const navigate = useNavigate();
    let fetchedTeams;
    const [teamState, setTeamState] = useState(57);
    const [teamId, setTeamId] = useState(40);
    const pickTeam = (newTeam) => {
        setTeamState(newTeam);
    }

    // const {dataTeamInfo, loading, error} = useFetchTeamInfo();
    
    // if(loading) return <div>Loading...</div>;

    // if(error) console.log(error);

    // if(dataTeamInfo) {
    //     console.log(dataTeamInfo.data.response)
    //     localStorage.setItem("apiTeamInfo", JSON.stringify(dataTeamInfo.data.response));
    // }
    fetchedTeams = JSON.parse(localStorage.getItem("apiTeamInfo"));
    console.log(fetchedTeams);
    const goToTeam = (e) => {
        e.preventDefault();
        let teamName;
        for(let i = 0; i < fetchedTeams.length; i++) {
            if(+teamState === fetchedTeams[i].team.id) { 
                setTeamId(fetchedTeams[i].team.id);
                teamName = fetchedTeams[i].team.name;
                console.log(teamName);
            }
        }
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
                                {fetchedTeams.map((team) => {
                                    return (
                                        <option value={team.team.id}>{team.team.name}</option>
                                    )
                                })}
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