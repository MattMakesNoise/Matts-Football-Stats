import React from "react";
import styles from "./TeamBanner.module.css";

const TeamBanner = (props) => { 
    return (
        <section className={styles.teamBanner}>
            <div>
                <h2 className={styles.teamName}>{props.name}</h2>
            </div>
        </section>
    )
}

export default TeamBanner;