import './App.css';
import React from 'react';
import Header from './blocks/header'
import Main from './blocks/main'
import Calk from './blocks/calk'
import Help from './blocks/help'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
    <div className="mainpage">
      <Header/>
      <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
            </Routes>
            <Routes>
                <Route exact path="/calk" element={<Calk />} />
            </Routes>
            <Routes>
                <Route exact path="/help" element={<Help />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;
