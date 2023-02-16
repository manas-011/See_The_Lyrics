import React , {Component}  from "react";
import {BrowserRouter as Router , Route , Routes , Switch} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/Tracks/Lyrics";

import './App.css' ;

const App = () => {
    return (
      // <Context.Provider>
        <Router>
          <React.Fragment>
            <Navbar/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/lyrics/track/:id" element={<Lyrics />} />
              </Routes>
            </div>
          </React.Fragment>
        </Router>
      // </Context.Provider>
        
    ) ;
}

export default App ;