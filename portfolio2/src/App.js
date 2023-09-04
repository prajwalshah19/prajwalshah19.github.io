import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import {MainScreen} from './components/MainScreen'

 
function App() {
  return (

      
    
    <Router>
        <Routes>

            <Route path = "*" element = {<MainScreen page = 'home'/>} />
            <Route path = "/about" element = {<MainScreen page = 'about'/>} />
            <Route path = "/projects" element = {<MainScreen page = 'projects'/>} />
            <Route path = "/progress" element = {<MainScreen page = 'progress'/>} />
            <Route path = "/contact" element = {<MainScreen page = 'contact'/>} />
            <Route path = "/projects/accendre" element = {<MainScreen page = 'projects/accendre'/>} />
            <Route path = "/projects/tradebot" element = {<MainScreen page = 'projects/tradebot'/>} />
           

        </Routes>
    </Router>



  );
}

export default App;
