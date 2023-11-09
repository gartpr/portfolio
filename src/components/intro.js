import React, { useEffect } from 'react';

import ThemeSwitch from '../components/switch';

import scrollToContact from './scrollToContact';

const Intro = () => {
    useEffect(() => {
      scrollToContact();
    }, []);

    return (
        <section className="s1">
            <div className="main-container">
                <div className="greeting-wrapper">
                    <h1>Hi, I'm Garrett Gorczyca</h1>
                    <span className="container">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </span>
                </div>

                <div className="intro-wrapper">
                    <div className="nav-wrapper">
                        <div className="dots-wrapper">
                            <div id="dot1" className="browser-dot"></div>
                            <div id="dot2" className="browser-dot"></div>
                            <div id="dot3" className="browser-dot"></div>
                        </div>

                        <ul id="navigation">
                            <a href="#contact-section"><button>Contact</button></a>
                        </ul>
                    </div>

                    <div className="left-column">
                        <img id="profile_pic" src="images/perofile.jpg" alt="Profile" />
                        <h5 style={{ textAlign: "center", lineHeight: 0 }}>Enable Darkmode?</h5>

                        <ThemeSwitch />

                        <p id="settings-note">*Theme settings will be saved for<br />your next visit</p>
                    </div>

                    <div className="right-column">
                        <div id="preview-shadow">
                            <div id="preview">
                                <div id="corner-tl" className="corner"></div>
                                <div id="corner-tr" className="corner"></div>
                                <h3>Who Am I?</h3>
                                <p>A student and a programmer with a hint of explorer and photographer genes.</p>
                                <div id="corner-br" className="corner"></div>
                                <div id="corner-bl" className="corner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
