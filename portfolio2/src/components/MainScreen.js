import React from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import {HomeScreen} from './HomeScreen.js'
import {AboutScreen} from './AboutScreen.js'
import {ProjectsScreen} from './ProjectsScreen.js'
import {ProgressScreen} from './ProgressScreen.js'
import { ProjectAccendre } from './ProjectAccendre.js';
import { ProjectTradeBot } from './ProjectTradeBot';
import {Contact} from './Contact.js'

import { Sidebar } from './Sidebar';


export function MainScreen(props) {


    return (
        <div
        className = 'mainScreen'
        >
            <Sidebar />
 
            { (props.page == 'home') ? <HomeScreen /> : 
             ((props.page == 'about') ? <AboutScreen /> : 
             ((props.page == 'projects' ? <ProjectsScreen /> : 
             ((props.page == 'progress') ? <ProgressScreen /> : 
             ((props.page == 'contact') ? <Contact/> : 
             ((props.page) == 'projects/accendre' ? <ProjectAccendre /> : <ProjectTradeBot/> ))))))  }


        

        </div>
            
            

        );

}

    