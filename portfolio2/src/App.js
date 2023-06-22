import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import {Sidebar} from './components/Sidebar'
import {MainScreen} from './components/MainScreen'
import { HomeScreen } from './components/HomeScreen';
 
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
           

        </Routes>
    </Router>



  );
}

export default App;
