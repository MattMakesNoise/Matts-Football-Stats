import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: 57};
    // }

    // handleChange = (e) => {
    //     this.setState({value: e.target.value});
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state.value);
    // }
     
    render() {
        return (
            <header>
                <div className="styles.logo">
                    <h1>Matts Football Stats</h1>
                </div>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose your team
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
                    </label>
                    <input type="submit" value="Submit"/>
                </form> */}
            </header>
        )
    }
}

export default Header;