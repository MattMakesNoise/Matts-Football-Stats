import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="styles.logo">
                    <h1>Matts Football Stats</h1>
                </div>
                <nav>
                    <div>
                        <h2>Norwich City</h2>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;