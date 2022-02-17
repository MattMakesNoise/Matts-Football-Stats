import React from "react";
import {teamIdsFixtures, formatDate, formatTime} from "../../helpers";
import '../css/TeamBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const TeamBanner = (props) => { 
    const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} />;
    const arrowRight = <FontAwesomeIcon icon={faAngleRight} />;
    const fixtures = JSON.parse(localStorage.getItem("apiDataFixtures"));

    let teamIdFixture;
    let teamNameNoWhitespace = props.name.replace(/\s/g, "");

    Object.entries(teamIdsFixtures).forEach(([key, value]) => {
        if(key.slice(0, 5) === teamNameNoWhitespace.slice(0, 5)) {
            teamIdFixture = value;
        }
    })
    
    let teamsFixtures = [];

    for(let i = 0; i < fixtures.response.length; i++) {
        if(teamIdFixture === fixtures.response[i].teams.away.id || teamIdFixture === fixtures.response[i].teams.home.id) {
            teamsFixtures.push(fixtures.response[i]);
        }
    }

    return (
        <section className="teamBanner">
            <div>
                <h2 className="teamName">{props.name}</h2>
            </div>
            <div className="carouselOuter">
                <button className="carouselButton carouselButton-left">{arrowLeft}</button>
                <div className="carouselInner">
                    <div className="carouselTrack">
                        {teamsFixtures.map((fixture) => {
                            return (
                                <div className="carouselSlide">
                                    <div className="homeWrap">
                                        <div className="crestWrap">
                                            <img src={`${fixture.teams.home.logo}`} alt="team crest" className="teamCrest"></img>
                                        </div>
                                        <div className="nameWrap">{fixture.teams.home.name}</div>
                                        <div className="scoredateHome">
                                            {fixture.score.fulltime.home !== null 
                                                ? <div>{`${fixture.score.fulltime.home}`}</div>
                                                : <div>{formatDate(fixture.fixture.date)}</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="awayWrap">
                                        <div className="crestWrap">
                                            <img src={`${fixture.teams.away.logo}`} alt="team crest" className="teamCrest"></img>
                                        </div>
                                        <div className="nameWrap">{fixture.teams.away.name}</div>
                                        <div className="scoredateAway">
                                            {fixture.score.fulltime.away !== null 
                                                ? <div>{`${fixture.score.fulltime.away}`}</div>
                                                : <div>{formatTime(fixture.fixture.date)}</div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className="carouselButton carouselButton-right">{arrowRight}</button>
            </div>
        </section>
    )
}

export default TeamBanner;
