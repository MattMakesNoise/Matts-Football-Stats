import React from "react";
import '../../App.css';
import Header from "../Header/Header";
import styles from "./TeamPicker.module.css";

class TeamPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 57};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className={styles.App}>
                <Header />
                <div className={styles.AppBody}>
                    <div className={styles.AppBodyInner}>
                        <div className={styles.teamPickWrap}>
                            <h2>Pick A Team</h2>
                            <div>
                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="57">Arsenal</option>
                                    <option value="58">Aston Villa</option>
                                    <option value="402">Brentford</option>
                                    <option value="397">Brighton and Hove</option>
                                    <option value="328">Burnley</option>
                                    <option value="61">Chelsea</option>
                                    <option value="354">Crystal Palace</option>
                                    <option value="62">Everton</option>
                                    <option value="341">Leeds</option>
                                    <option value="338">Leicester</option>
                                    <option value="64">Liverpool</option>
                                    <option value="65">Manchester City</option>
                                    <option value="66">Manchester United</option>
                                    <option value="67">Newcastle</option>
                                    <option value="68">Norwich</option>
                                    <option value="340">Southampton</option>
                                    <option value="73">Tottenham</option>
                                    <option value="346">Watford</option>
                                    <option value="563">West Ham</option>
                                    <option value="76">Wolves</option>
                                </select>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default TeamPicker;