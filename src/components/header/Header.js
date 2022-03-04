import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <div className="logo">
                        <img src="../../logos_white_16x9.png"></img>
                    </div>
                </Link>
            </header>
        )
    }
}

export default Header;