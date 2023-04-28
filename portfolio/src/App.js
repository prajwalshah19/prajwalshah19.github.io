import React from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch} from 'react-router-dom'

import {Sidebar} from './components/Sidebar'

 
function App() {
  return (
    <div
    className="App"
    >
      
    <Sidebar/>



    </div>
  );
}

export default App;
