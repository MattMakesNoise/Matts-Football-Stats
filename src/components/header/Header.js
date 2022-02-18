import React from "react";
import "../css/Header.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="../../logos_white_16x9.png"></img>
                </div>
            </header>
        )
    }
}

export default Header;