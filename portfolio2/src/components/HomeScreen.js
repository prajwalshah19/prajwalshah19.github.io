import React from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

export function HomeScreen(props) {

    let navigate = useNavigate()
    
    function onButtonClick() {
        navigate('/projects')
    }

    return (
        <div
        className='homeScreen'
        >
            
            <h1>Hi, I'm Prajwal Shah</h1>
            <p>Computer Science Student | Entrepreneur</p>
            <div
            className = 'buttonName'
            >
                <Button onClick = {onButtonClick} className= 'mainButton' variant="outline-light" size="lg">Check Out My Work! </Button>
                
            </div>
        </div>
    
        );

}
