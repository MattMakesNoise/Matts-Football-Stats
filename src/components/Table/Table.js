import React from "react";
import useFetchTable from "../Fetches/useFetchTable";
import "../css/Table.css";

const Table = () => {
    const {dataTable, loadingTable, errorTable} = useFetchTable("http://api.football-data.org/v2/competitions/2021/standings");
    let standings;
    if(loadingTable) return <div>Loading...</div>;

    if(errorTable) console.log(errorTable);

    if(dataTable) {
        localStorage.setItem("apiDataStandings", JSON.stringify(dataTable.standings[0].table));
    }
    standings = JSON.parse(localStorage.getItem("apiDataStandings"));
    return (
        <div className="table">
            <div className="tableHead">
                {/* 1. Add a header for the table with data description */}
                <div className="position"><strong>Pos</strong></div>
                <div className="teamName"><strong>Team Name</strong></div>
                <div className="played"><strong>Played</strong></div>
                <div className="won"><strong>W</strong></div>
                <div className="drawn"><strong>D</strong></div>
                <div className="lost"><strong>L</strong></div>
                <div className="goalsFor"><strong>F</strong></div>
                <div className="goalsAgainst"><strong>A</strong></div>
                <div className="goalDifference"><strong>GD</strong></div>
                <div className="points"><strong>Pts</strong></div>
            </div>
            {/* 2. Loop through the data pulled from the array and output into each column */}
            {standings.map((stand, i) => {
                return (
                    <div className="teamWrap">
                        <div className="position">{(i+1)}</div>
                        <div className="teamName">{stand.team.name.slice(0, -2)}</div>
                        <div className="played">{stand.playedGames}</div>
                        <div className="won">{stand.won}</div>
                        <div className="drawn">{stand.draw}</div>
                        <div className="lost">{stand.lost}</div>
                        <div className="goalsFor">{stand.goalsFor}</div>
                        <div className="goalsAgainst">{stand.goalsAgainst}</div>
                        <div className="goalDifference">{stand.goalDifference}</div>
                        <div className="points">{stand.points}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table;