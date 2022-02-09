import React from "react";
import styles from "./TeamBanner.module.css";

class TeamBanner extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <h2 className={styles.teamName}>{this.props.teamname}</h2>
                </div>
            </section>
        )
    }
}

export default TeamBanner;