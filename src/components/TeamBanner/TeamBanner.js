import React from "react";
import axios from "axios";
import {teamIdsFixtures} from "../../helpers";
import styles from "./TeamBanner.module.css";

const TeamBanner = (props) => { 
    const options = {
        method: 'GET',
        url: 'https://api-football-beta.p.rapidapi.com/fixtures',
        params: {
            to: '2022-06-30',
            season: '2021',
            league: '39',
            from: '2021-08-01'
        },
        headers: {
            'x-rapidapi-host': 'api-football-beta.p.rapidapi.com',
            'x-rapidapi-key': 'f70403a975msh4ae717f35387ed9p18ff5djsn9a1119e794e8'
        }
    };
    
    axios.request(options).then(function (res) {
        localStorage.setItem("apiDataFixtures", JSON.stringify(res.data.response));
    }).catch(function (error) {
        console.error(error);
    });

    const fixtures = JSON.parse(localStorage.getItem("apiDataFixtures"));

    let teamIdFixture;
    let teamNameNoWhitespace = props.name.replace(/\s/g, "");

    Object.entries(teamIdsFixtures).forEach(([key, value]) => {
        if(key.slice(0, 5) === teamNameNoWhitespace.slice(0, 5)) {
            teamIdFixture = value;
        }
    })
    
    const teamsFixtures = [];

    for(let i = 0; i < fixtures.length; i++) {
        if(teamIdFixture === fixtures[i].teams.away.id || teamIdFixture === fixtures[i].teams.home.id) {
            teamsFixtures.push(fixtures[i]);
        }
    }

    return (
        <section className={styles.teamBanner}>
            <div>
                <h2 className={styles.teamName}>{props.name}</h2>
            </div>
        </section>
    )
}

export default TeamBanner;