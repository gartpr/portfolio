// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path="/" element={<Home />} />
            <Route path="/post1" element={<Post1 />} />
            <Route path="/post2" element={<Post2 />} />
            <Route path="/post3" element={<Post3 />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
