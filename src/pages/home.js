import React from 'react';

import Intro from '../components/intro';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

function Home() {
    return (
        <div className="Home">
            <Intro />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;