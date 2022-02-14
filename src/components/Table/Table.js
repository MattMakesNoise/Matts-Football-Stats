import React from "react";
import useFetchTable from "../Fetches/useFetchTable";
import styles from "./Table.module.css";

const Table = () => {
    const {dataTable, loadingTable, errorTable} = useFetchTable("http://api.football-data.org/v2/competitions/2021/standings");
    let standings;
    if(loadingTable) return <div>Loading...</div>;

    if(errorTable) console.log(errorTable);

    if(dataTable) {
        localStorage.setItem("apiDataStandings", JSON.stringify(dataTable.standings[0].table));
        // console.log(data.standings[0].table);
    }
    standings = JSON.parse(localStorage.getItem("apiDataStandings"));
    return (
        <div className={styles.table}>
            <div className={styles.tableHead}>
                {/* 1. Add a header for the table with data description */}
                <div className={styles.position}><strong>Pos</strong></div>
                <div className={styles.teamName}><strong>Team Name</strong></div>
                <div className={styles.played}><strong>Played</strong></div>
                <div className={styles.won}><strong>W</strong></div>
                <div className={styles.drawn}><strong>D</strong></div>
                <div className={styles.lost}><strong>L</strong></div>
                <div className={styles.goalsFor}><strong>F</strong></div>
                <div className={styles.goalsAgainst}><strong>A</strong></div>
                <div className={styles.goalDifference}><strong>GD</strong></div>
                <div className={styles.points}><strong>Pts</strong></div>
            </div>
            {/* 2. Loop through the data pulled from the array and output into each column */}
            {standings.map((stand, i) => {
                return (
                    <div className={styles.teamWrap}>
                        <div className={styles.position}>{(i+1)}</div>
                        <div className={styles.teamName}>{stand.team.name.slice(0, -2)}</div>
                        <div className={styles.played}>{stand.playedGames}</div>
                        <div className={styles.won}>{stand.won}</div>
                        <div className={styles.drawn}>{stand.draw}</div>
                        <div className={styles.lost}>{stand.lost}</div>
                        <div className={styles.goalsFor}>{stand.goalsFor}</div>
                        <div className={styles.goalsAgainst}>{stand.goalsAgainst}</div>
                        <div className={styles.goalDifference}>{stand.goalDifference}</div>
                        <div className={styles.points}>{stand.points}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table;