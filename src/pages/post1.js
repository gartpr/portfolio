import React from 'react';
import { Link } from 'react-router-dom';

const Post1 = () => {
    return (
        <body>
            <section className="s2">
                <div className="main-container">
                    <div className="nav-wrapper">
                        <Link to='/'>
                            <div className="dots-wrapper">
                                <div id="dot1" className="browser-dot"></div>
                                <div id="dot2" className="browser-dot"></div>
                                <div id="dot3" className="browser-dot"></div>
                            </div>
                        </Link>
                    </div>

                    <div className="main-container">

                        <h3>Portfolio Website</h3>

                        <h5>Technologies:</h5>
                        <ul>
                            <li>- HTML/CSS</li>
                            <li>- Javascript</li>
                            <li>- React</li>
                        </ul>

                        <br />

                        <p>
                            Welcome to my Portfolio Website, a digital showcase of my creative journey 
                            and web development skills. This platform represents my personal and professional 
                            growth, allowing me to share my experiences, projects, and aspirations with you.
                            <br />
                            <br />
                            This portfolio started as a just an HTML/CSS project that was originally hosted on AWS.
                            In order to showcase my skills, I ported the project to React and hosted on GitHub Pages.
                            <br />
                            <br />
                            As the sole creator and developer, I crafted this website to provide a seamless 
                            and immersive experience. It incorporates various technologies to deliver an engaging 
                            and informative interface.
                            <br />
                            <br />
                            This Portfolio Website serves as a hub for my projects, skills, and achievements. 
                            It highlights the technologies I've mastered, including HTML, CSS, and JavaScript, 
                            along with frameworks like React. Explore my projects, learn about my experiences, 
                            and get in touch through the contact form.
                        </p>

                        <a target="_blank" href="https://github.com/gartpr/portfolio" rel="noreferrer">
                            View the Project on Github</a>

                        <br />
                        <br />
                    </div>
                </div>
            </section>
        </body>
    );
}

export default Post1;