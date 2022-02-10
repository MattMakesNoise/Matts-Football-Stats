import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="styles.logo">
                    <h1>Matts Football Stats</h1>
                </div>
            </header>
        )
    }
}

export default Header;