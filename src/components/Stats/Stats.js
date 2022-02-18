import React from "react";
import useFetchTeamsTwo from "../Fetches/useFetchTeamsTwo";
import styles from "../css/Stats.css";

const Stats = (props) => {
    // const {dataTeamsTwo, loadingTeamsTwo, errorTeamsTwo} = useFetchTeamsTwo("https://api-football-v1.p.rapidapi.com/v3/teams/statistics");
    // let standings;
    // if(loadingTeamsTwo) return <div>Loading...</div>;

    // if(errorTeamsTwo) console.log(errorTeamsTwo);

    // if(dataTeamsTwo) {
    //     // localStorage.setItem("apiDataStandings", JSON.stringify(dataTeamsTwo.standings[0].table));
    //     console.log(dataTeamsTwo);
    // }
    // standings = JSON.parse(localStorage.getItem("apiDataStandings"));
    return (
        <section className="statsWrapper">
            <div className="crestFounded">   
                <img src={`${props.crest}`} alt="team crest"></img>
                <h3>Founded in: {props.founded}</h3>
            </div>
            <div className="stadiumWebsite">
                <h3>Stadium</h3>
                <p>{props.stadium}</p>
                <p>{props.address}</p>
                <h3><a href={`${props.website}`} target="_blank">Club Website</a></h3>
            </div>
        </section>
    )
}

export default Stats;