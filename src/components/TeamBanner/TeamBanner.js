import React, { useEffect, useState, useRef } from "react";
import {formatDate, formatTime} from "../Helpers/helpers";
import '../css/TeamBanner.css';
import {motion} from 'framer-motion';

const TeamBanner = (props) => { 
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const fixtures = props.fixtures;
    let teamsFixtures = [];
    for(let i = 0; i < fixtures.length; i++) {
        if(props.team === fixtures[i].teams.home.name || props.team === fixtures[i].teams.away.name) {
            teamsFixtures.push(fixtures[i]);
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
