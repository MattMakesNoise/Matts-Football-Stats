import React from "react";
import useFetchTeamStats from "../Fetches/useFetchTeamStats";
import "../css/Stats.css"

const Stats = (props) => {
    let teamName = props.team;
    let teamId = props.id;
    // const {dataTeamStats, loading, error} = useFetchTeamStats(teamId);
        
    // if(loading) return <div>Loading...</div>;

    // if(error) console.log(error);

    // if(dataTeamStats) {
    //     console.log(dataTeamStats)
    //     localStorage.setItem(`apiTeamStats${teamName}`, JSON.stringify(dataTeamStats));
    // }

    const infoArray = props.stats;
    let teamStats;
    for(let i = 0; i < infoArray.length; i++) {
        if(props.team === infoArray[i].team.name) {
            teamStats = infoArray[i];
        }
    }


    return (
        <section className="statsWrapper">
            <div className="crestFounded">   
                <img src={`${teamStats.team.logo}`} alt="team crest"></img>
                <h3>Founded in: {teamStats.team.founded}</h3>
            </div>
            <div className="stadiumWebsite">
                <h3>Stadium</h3>
                <p>{teamStats.venue.name}</p>
                <p>Capacity: {teamStats.venue.capacity}</p>
                <p>Surface: {teamStats.venue.surface}</p>
                <h4>Address</h4>
                <p>{teamStats.venue.address}</p>
                <p>{teamStats.venue.city}</p>
                <img src={`${teamStats.venue.image}`} alt="stadium image"></img>
            </div>
        </section>
    )
}

export default Stats;