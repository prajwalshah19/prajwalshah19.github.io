import React from 'react';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accendre from '../assets/accendre.svg'
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
            title: "Test", 
            description: "This is a placeholder", 
            img: null, 
            imgClass: "none",
            ref: () => (navigate("/projects"))
        },
        {
            title: "Test", 
            description: "This is a placeholder", 
            img: null, 
            imgClass: "none",
            ref: () => (navigate("/projects"))
        }
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
