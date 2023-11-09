import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
    <section className="s1">
        <div className="main-container">
            <h3 style={{ textAlign: "center" }}>My Projects</h3>
            
            <div className="post-wrapper">
                <div>
                    <div className="post">
                        <img className="thumbnail" src="images/reactapps.png" alt="Project"/>
                        <div className="post-preview">
                            <h6 className="post-title">This Website</h6>
                            <p className="post-intro">View the code that makes this website.</p>
                            <Link to='/post1'>
                                <p className="read-more-link">Read More</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post">
                        <img className="thumbnail" src="images/reinforcement.jpg" alt="Project"/>
                        <div className="post-preview">
                            <h6 className="post-title">Reinforcement Learning</h6>
                            <p className="post-intro">Learn how to make a basic RL agent.</p>
                            <Link to='/post2'>
                                <p className="read-more-link">Read More</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="post">
                        <img className="thumbnail" src="images/shack_roof.jpg" alt="Project"/>
                        <div className="post-preview">
                            <h6 className="post-title">Photography</h6>
                            <p className="post-intro">My favorite pictures that I have taken.</p>
                            <Link to='/post3'>
                                <p className="read-more-link">Read More</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Projects;
