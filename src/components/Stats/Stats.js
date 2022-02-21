import React from "react";
import useFetchStatsInfo from "../Fetches/useFetchStatsInfo";
import useFetchStatsTeam from "../Fetches/useFetchStatsTeam";
import "../css/Stats.css"
import { teamIdsFixtures } from "../Helpers/helpers";

const Stats = (props) => {
    const {dataStatsInfo, loadingStatsInfo, errorStatsInfo} = useFetchStatsInfo();
    let statsInfo;
    if(loadingStatsInfo) return <div>Loading...</div>;

    if(errorStatsInfo) console.log(errorStatsInfo);

    if(dataStatsInfo) {
        // localStorage.setItem("apiStatsInfo", JSON.stringify(dataTeamsTwo.standings[0].table));
        console.log(dataStatsInfo);
    }
    // statsInfo = JSON.parse(localStorage.getItem("apiStatsInfo"));

    // const {dataStatsTeam, loadingStatsTeam, errorStatsTeam} = useFetchStatsTeam();
    // let statsTeam;
    // if(loadingStatsTeam) return <div>Loading...</div>;

    // if(errorStatsTeam) console.log(errorStatsTeam);

    // if(dataStatsTeam) {
    //     // localStorage.setItem("apiStatsTeam", JSON.stringify(dataTeamsTwo.standings[0].table));
    //     console.log(dataStatsTeam);
    // }
    // // statsTeam = JSON.parse(localStorage.getItem("apiStatsTeam"));
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