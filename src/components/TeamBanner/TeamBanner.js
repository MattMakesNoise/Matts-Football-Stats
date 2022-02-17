import React from "react";
import {teamIdsFixtures, formatDate, formatTime} from "../../helpers";
import styles from "./TeamBanner.module.css";

const TeamBanner = (props) => { 

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
            <div className={styles.cardCarouselWrapper}>
                {teamsFixtures.map((fixture) => {
                    return (
                        <div className={styles.cardWrap}>
                            <div className={styles.homeWrap}>
                                <img src={`${fixture.teams.home.logo}`} alt="team crest"></img>
                                <div>{fixture.teams.home.name}</div>
                                {fixture.score.fulltime.home !== null 
                                    ? <div>{`${fixture.score.fulltime.home}`}</div>
                                    : <div>{formatDate(fixture.fixture.date)}</div>
                                }
                            </div>
                            <div className={styles.awayWrap}>
                                <img src={`${fixture.teams.away.logo}`} alt="team crest"></img>
                                <div>{fixture.teams.away.name}</div>
                                {fixture.score.fulltime.away !== null 
                                    ? <div>{`${fixture.score.fulltime.away}`}</div>
                                    : <div>{formatTime(fixture.fixture.date)}</div>
                                }
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TeamBanner;
