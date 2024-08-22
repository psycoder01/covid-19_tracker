import React from "react";
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="api-info">
                <span> Disease API</span>
                <a href="https://github.com/disease-sh/API">LINK</a>
            </div>
            <div className="github-info">
                <span>GitHub</span>
                <a href="https://github.com/psycoder01">LINK</a>
            </div>
            <br />
            <br />
            <pre>
                COVID-19 Tracker <span>©</span> PSYCODER01
            </pre>
        </div>
    );
};

export default Footer;
