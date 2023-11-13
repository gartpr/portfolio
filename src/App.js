import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Post1 from './pages/post1';
import Post2 from './pages/post2';
import Post3 from './pages/post3';
import { ThemeProvider } from './components/theme';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/post1" element={<Post1 />} />
                        <Route exact path="/post2" element={<Post2 />} />
                        <Route exact path="/post3" element={<Post3 />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
