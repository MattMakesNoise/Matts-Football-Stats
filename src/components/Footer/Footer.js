import React from "react";
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <div>
                <h3>&copy; Matt Jones {new Date().getFullYear()}</h3>
            </div>
        </section>
    )
}

export default Footer;