import React from "react";
import styles from "./Stats.module.css"

class Stats extends React.Component {
    render() {
        return (
            <section className={styles.statsWrapper}>
                <div>
                    <h3>This will be the Stats section</h3>
                </div>
            </section>
        )
    }
}

export default Stats;