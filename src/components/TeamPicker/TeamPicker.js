import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../../App.css';
import useFetchTable from "../Fetches/useFetchTable";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../TeamPicker/TeamPicker.css";
import LoadingSpinner from "../Loading/LoadingSpinner";

const TeamPicker = () => {
    const navigate = useNavigate();
    const [teamState, setTeamState] = useState(33);
    let [teamId, setTeamId] = useState(40);
    const pickTeam = (newTeam) => {
        setTeamState(newTeam);
    }

    const {dataTable, loading, error} = useFetchTable();

    let fetchedTeams;

    if(loading) return <LoadingSpinner />;

    if(error) console.log(error);

    if(dataTable) {
        localStorage.setItem("apiTable", JSON.stringify(dataTable.data.response[0].league.standings[0]));
    } 
    
    fetchedTeams = JSON.parse(localStorage.getItem("apiTable"))
    const goToTeam = (e) => {
        e.preventDefault();
        let teamName;
        let teamId;
        for(let i = 0; i < fetchedTeams.length; i++) {
            if(+teamState === fetchedTeams[i].team.id) { 
                teamId = fetchedTeams[i].team.id;
                teamName = fetchedTeams[i].team.name;
            }
        }
        navigate(`/teams/${teamName}`, {state: {id: teamId}});
    }
    
    return (
        <div className="App">
            <Header />
            <div className="AppBody">
                <div className="AppBodyInner">
                    <div className="teamPickWrap">
                        <h2>Pick A Team</h2>
                        <form action="" onSubmit={(e) => goToTeam(e)}>
                            <select onChange={(e) => {pickTeam(e.target.value)}} value={teamState}>
                                {fetchedTeams && fetchedTeams.map((team) => {
                                    return (
                                        <option value={team.team.id}>{team.team.name}</option>
                                    )
                                })}
                            </select>
                            <button type="submit" onClick={() => setTeamId(teamId)}>Go to team!</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TeamPicker;