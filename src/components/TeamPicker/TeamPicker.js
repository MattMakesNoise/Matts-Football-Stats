import React, { useState } from "react";
import '../../App.css';
import useFetchTeams from "../Fetches/useFetchTeams";
import Header from "../Header/Header";
import styles from "./TeamPicker.module.css";

const TeamPicker = () => {
    const [teamState, setTeamState] = useState(59);

    const pickTeam = (newTeam) => {
        setTeamState(newTeam)
    }

    const {dataTeams, loadingTeams, errorTeams} = useFetchTeams("http://api.football-data.org/v2/teams");
    let teams;
    if(loadingTeams) return <div>Loading...</div>;

    if(errorTeams) console.log(errorTeams);

    if(dataTeams) {
        localStorage.setItem("apiTeams", JSON.stringify(dataTeams));
        console.log(dataTeams);
    }
    teams = JSON.parse(localStorage.getItem("apiTeams"));

    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.AppBody}>
                <div className={styles.AppBodyInner}>
                    <div className={styles.teamPickWrap}>
                        <h2>Pick A Team</h2>
                        <div>
                            <select onChange={(e) => pickTeam(e.target.value)} value={teamState}>
                                <option value="57">Arsenal</option>
                                <option value="58">Aston Villa</option>
                                <option value="402">Brentford</option>
                                <option value="397">Brighton and Hove</option>
                                <option value="328">Burnley</option>
                                <option value="61">Chelsea</option>
                                <option value="354">Crystal Palace</option>
                                <option value="62">Everton</option>
                                <option value="341">Leeds</option>
                                <option value="338">Leicester</option>
                                <option value="64">Liverpool</option>
                                <option value="65">Manchester City</option>
                                <option value="66">Manchester United</option>
                                <option value="67">Newcastle</option>
                                <option value="68">Norwich</option>
                                <option value="340">Southampton</option>
                                <option value="73">Tottenham</option>
                                <option value="346">Watford</option>
                                <option value="563">West Ham</option>
                                <option value="76">Wolves</option>
                            </select>
                        </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default TeamPicker;