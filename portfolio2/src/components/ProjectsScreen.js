import React from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accendre from '../assets/accendre.svg'
import TradeBot from '../assets/tradebot.png'
import { useNavigate } from 'react-router-dom'


export function ProjectsScreen(props) {

    let navigate = useNavigate()
    const projects = [
        {
            title: "Accendre", 
            description: "Over the last two years, I have worked on Accendre, a fitness tech startup that aims to improve athletic performance through science-based training.",
            img: Accendre, 
            imgClass: 'accendreIcon',
            ref: () => (navigate("/projects/accendre"))
        }, 

        {
            title: "TradeBot", 
            description: "In the summer of 2023, I worked on an algorithmic trading bot with Python.", 
            img: TradeBot, 
            imgClass: "none",
            ref: () => (navigate("/projects/tradebot"))
        },

    ]

 
 


    return (
        <div
        className='homeScreen'
        >
            <h1>Projects</h1>
        <div className= 'projects' >
            
        {projects.map(item => {

            return (
                <div>
                <Card className = 'projectCard'>
                <Card.Img className = {item.imgClass} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Button onClick = {item.ref} className = 'cardButton' variant="outline-dark">Learn More!</Button>
                </Card.Body>
              </Card>
              </div>
            )}) }
            

        </div>
            
        </div>

        );

}
