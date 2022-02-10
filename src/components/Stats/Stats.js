import React from "react";
import useFetchTeams from "../Fetches/useFetchTeams";
import styles from "./Stats.module.css"

const Stats = (props) => {
    const {data, loading, error} = useFetchTeams("http://api.football-data.org/v2/competitions/68/teams");
    let team;
    if(loading) return <div>Loading...</div>;

    if(error) console.log(error);

    if(data) {
        // localStorage.setItem("apiDataTeam", JSON.stringify(data.standings[0].table));
        console.log(data);
    }
    // team = JSON.parse(localStorage.getItem("apiDataTeam"));
    
    return (
        <section className={styles.statsWrapper}>
            <div>
                <h3>This will be the Stats section</h3>
            </div>
        </section>
    )
}

export default Stats;