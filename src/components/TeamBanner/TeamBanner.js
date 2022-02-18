import React, { useEffect, useState, useRef } from "react";
import {teamIdsFixtures, formatDate, formatTime} from "../Helpers/helpers";
import '../css/TeamBanner.css';
import {motion} from 'framer-motion';

const TeamBanner = (props) => { 
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

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
            <motion.div className="carouselOuter" ref={carousel} whileTap={{cursor: "grabbing"}}>
                <motion.div className="carouselInner" drag="x" dragConstraints={{right: 0, left: -width}}>
                    {teamsFixtures.map((fixture) => {
                        return (
                            <motion.div className="carouselSlide">
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
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default TeamBanner;
