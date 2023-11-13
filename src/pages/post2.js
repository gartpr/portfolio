import React from 'react';
import { Link } from 'react-router-dom';

const Post2 = () => {
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

                        <h3>Reinforcement Learning Car Racing Project</h3>

                        <p>
                            Welcome to the Reinforcement Learning Car Racing Project, where 
                            we explore the exciting world of autonomous driving using 
                            Reinforcement Learning (RL). In this project, we leverage the power of RLlib, 
                            a cutting-edge Reinforcement Learning Library, to train a model that can 
                            navigate and optimize a car's speed in a custom Gym environment.
                            <br />
                            <br />
                            The Gym environment we've created, called Car_v0, simulates a car racing game. 
                            The car is tasked with making decisions - slow down, maintain speed, or speed 
                            up - to keep its speed within an optimal range and maximize rewards. The project 
                            aims to showcase the application of reinforcement learning in solving complex tasks 
                            like autonomous car control.
                        </p>

                        <h5>Key Technologies:</h5>
                        <ul>
                            <li>- Jupyter Notebook</li>
                            <li>- TensorFlow</li>
                            <li>- RLlib</li>
                            <li>- OpenAI Gym</li>
                            <li>- Python</li>
                        </ul>

                        <h5>Key Components:</h5>
                        <ul>
                            <li>- Gym Environment: The Car_v0 Gym environment simulates the car's speed, 
                                rewards, and actions.</li>
                            <li>- Testing the Environment: We evaluate the environment by running episodes 
                                with random actions to assess car performance.</li>
                            <li>- Initializing Ray: We use Ray, a distributed computing library, to efficiently 
                                train the RL model.</li>
                            <li>- Training with RLlib: We register the Car_v0 environment in RLlib, use PPO for 
                                training, and achieve impressive results.</li>
                            <li>- Using the Trained Model: The trained model demonstrates its capabilities by 
                                successfully playing the game and achieving high scores.</li>
                        </ul>

                        <p>
                            This project is an exciting exploration of the potential of reinforcement learning in 
                            the field of autonomous vehicles. To get hands-on with the code and detailed step-by-step 
                            instructions, please refer to the Jupyter Notebook, where you can run, experiment, and 
                            learn more about RL in the context of car racing. Enjoy the adventure of experimenting 
                            with RL and car racing!
                        </p>

                        <a target="_blank" href="https://github.com/gartpr/Simple-Reinforcement-Learning-Model-Car-Simulation" rel="noreferrer">
                            View the Project on Github</a>

                        <br />
                        <br />
                    </div>
                </div>
            </section>
        </body>
    );
}

export default Post2;
