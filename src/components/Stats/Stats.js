import React from "react";
import useFetchTeams from "../Fetches/useFetchTeams";
import styles from "./Stats.module.css"

const Stats = (props) => {
    
    return (
        <section className={styles.statsWrapper}>
            
            <img src={`${props.crest}`} alt="team crest"></img>
            <div>
                <h3>Stadium</h3>
                <p>{props.stadium}</p>
                <p>{props.address}</p>

                <h3>Founded in: {props.founded}</h3>
                <h3><a href={`${props.website}`} target="_blank">Club Website</a></h3>
            </div>
        </section>
    )
}

export default Stats;