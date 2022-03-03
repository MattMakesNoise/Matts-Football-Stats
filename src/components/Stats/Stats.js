import React from "react";
import useFetchTeamStats from "../Fetches/useFetchTeamStats";
import "../css/Stats.css"

const Stats = (props) => {
    let teamName = props.team;
    let teamId = props.id;
    const {dataTeamStats, loading, error} = useFetchTeamStats(teamId);
        
    if(loading) return <div>Loading...</div>;

    if(error) console.log(error);

    if(dataTeamStats) {
        localStorage.setItem(`apiTeamStats${teamName}`, JSON.stringify(dataTeamStats));
    }

    let teamInfo = JSON.parse(localStorage.getItem(`apiTeamStats${teamName}`));

    const infoArray = props.stats;
    let teamStats;
    for(let i = 0; i < infoArray.length; i++) {
        if(props.team === infoArray[i].team.name) {
            teamStats = infoArray[i];
        }
    }
    // const teamFormPretty = () => {
    //     const formFull = teamInfo.response.form;
    //     const form =  formFull.slice(formFull.length -5)

    // }
    const formFull = teamInfo.response.form;
    const form =  formFull.slice(formFull.length -5)

    return (
        <section className="statsWrapper">
            <div className="teamInfo">
                <div className="crestFounded">   
                    <h2>{teamName}</h2>
                    <img src={`${teamStats.team.logo}`} alt="team crest"></img>
                    <h3>Address</h3>
                    <p>{teamStats.venue.address}</p>
                    <p>{teamStats.venue.city}</p>
                    <p><strong>Founded in</strong>: {teamStats.team.founded}</p>
                </div>
                <div className="stadiumWrapper">
                    <div className="stadium"> 
                        <h3>Stadium</h3>
                        <p>{teamStats.venue.name}</p>
                        <p><strong>Capacity</strong>: {teamStats.venue.capacity}</p>
                        <p><strong>Surface</strong>: {teamStats.venue.surface}</p>
                        
                    </div>
                    <div className="stadiumImage">
                        <img src={`${teamStats.venue.image}`} alt="stadium image"></img>
                    </div>
                </div>
            </div>
            <div className="teamStats">
                <div><strong>Clean Sheets</strong>: {teamInfo.response.clean_sheet.total}</div>
                <div><strong>Goals for Average</strong>: {teamInfo.response.goals.for.average.total}</div>
                <div><strong>Goals against Average</strong>: {teamInfo.response.goals.against.average.total}</div>
                <div><strong>Failed to Score</strong>: {teamInfo.response.failed_to_score.total}</div>
                <div><strong>Penalties scored</strong>: {teamInfo.response.penalty.scored.total} <span className="percentage">Percentage</span>: {teamInfo.response.penalty.scored.percentage}</div>
                <div><strong>Penalties missed</strong>: {teamInfo.response.penalty.missed.total} <span className="percentage">Percentage</span>: {teamInfo.response.penalty.missed.percentage}</div>
                <div><strong>Form</strong>: <span className="form">{form}</span></div>
            </div>
        </section>
    )
}

export default Stats;