import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className={styles.logo}>
                    <img src="../../logos_white_16x9.png"></img>
                </div>
            </header>
        )
    }
}

export default Header;