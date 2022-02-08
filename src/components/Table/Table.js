import React from "react";
import useFetch from "../../useFetch";
import styles from "./Table.module.css";

const Table = (props) => {
    const {data, loading, error} = useFetch("https://api-football-beta.p.rapidapi.com/standings?season=2021&league=39");
    let standings = JSON.parse(sessionStorage.getItem("apiDataStandings"));
    if(loading) return <div>Loading...</div>;

    if(error) console.log(error);

    if(data) {
        sessionStorage.setItem("apiDataStandings", JSON.stringify(data.response[0].league.standings[0]));
        // standings = JSON.parse(sessionStorage.getItem("apiDataStandings"));
    }

    return (
        <div className={styles.table}>
            <div className={styles.tableHead}>
                {/* 1. Add a header for the table with data description */}
                <div className={styles.position}>Pos</div>
                <div className={styles.teamName}>Team Name</div>
                <div className={styles.played}>Played</div>
                <div className={styles.won}>W</div>
                <div className={styles.drawn}>D</div>
                <div className={styles.lost}>L</div>
                <div className={styles.goalsFor}>F</div>
                <div className={styles.goalsAgainst}>A</div>
                <div className={styles.goalDifference}>GD</div>
                <div className={styles.points}>Pts</div>
                <div className={styles.form}>Form</div>
            </div>
            {/* 2. Loop through the data pulled from the array and output into each column */}
            {standings.map((stand, i) => {
                return (
                    <div className={styles.teamWrap}>
                        <div className={styles.position}>{(i+1)}</div>
                        <div className={styles.teamName}>{stand.team.name}</div>
                        <div className={styles.played}>{stand.all.played}</div>
                        <div className={styles.won}>{stand.all.win}</div>
                        <div className={styles.drawn}>{stand.all.draw}</div>
                        <div className={styles.lost}>{stand.all.lose}</div>
                        <div className={styles.goalsFor}>{stand.all.goals.for}</div>
                        <div className={styles.goalsAgainst}>{stand.all.goals.against}</div>
                        <div className={styles.goalDifference}>{stand.goalsDiff}</div>
                        <div className={styles.points}>{stand.points}</div>
                        <div className={styles.form}>{stand.form}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table;