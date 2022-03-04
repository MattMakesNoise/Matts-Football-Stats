import React from "react";
import '../css/Footer.css';

const Footer = () => {
    // const year = new Date().getFullYear();
    // let year = date.getFullYear(); 

    return (
        <section className="footer">
            <div>
                <h3>&copy; Matt Jones {new Date().getFullYear()}</h3>
            </div>
        </section>
    )
}

export default Footer;