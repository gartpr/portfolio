import React from 'react';

const About = () => {
    return (
    <section className="s2">
        <div className="main-container">
            <div className="about-wrapper">
                <div className="about-me">
                    <h4>More about me</h4>

                    <p>I'm a passionate developer who thrives on building meaningful
                    projects and learning new things.</p>

                    <p>While I keep busy working various jobs and completing independent 
                    tasks, I hope that these endeavers become a launchpad for discovering
                    exciting career opportunites.</p>

                    <hr></hr>

                    <h4>PERSONAL SKILLS</h4>
    
                    <p>Professional developer: <a target="_blank" href="resume.pdf">Download Resume</a></p>

                    <div id="skills">
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>HTML/CSS</li>
                        </ul>

                        <ul>
                            <li>TensorFlow</li>
                            <li>Power Automate</li>
                            <li>Java</li>
                            <li>R</li>
                            <li>C</li>
                        </ul>
                    </div>
                </div>

                <div className="social-links">
                    <img id="social_img" src={process.env.PUBLIC_URL + '/images/redwood_stream.jpg'} alt="Social Links"/>
                    <h3>Find me on LinkedIn & Instagram</h3>
                    <a target="_blank" href="https://www.linkedin.com/in/garrettgorczyca/" rel="noreferrer">LinkedIn: @garrettgorczyca</a>
                    <br />
                    <a target="_blank" href="https://www.instagram.com/garrett_gorczyca/" rel="noreferrer">Instagram: @garrettgorczyca</a>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;
