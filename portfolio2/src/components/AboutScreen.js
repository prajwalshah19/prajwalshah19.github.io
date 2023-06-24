import React from 'react';
import '../App.css'
import purdue from '../assets/purdue.png'
import nchs from '../assets/nchs.png'
import accendre from '../assets/accendrebadge.png'
import codeninjas from '../assets/codeninjas.png'

import python from '../assets/python.svg'
import html from '../assets/html.svg'
import js from '../assets/js.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import cpp from '../assets/cpp.svg'
import java from '../assets/java.svg'
import thinkorswim from '../assets/thinkorswim.png'
export function AboutScreen(props) {

    const education = [

        {
            title: 'Purdue University - West Lafayette', 
            subheading: 'Major in Computer Science | Minor in Mathematical Economics',
            coursework: ['Multivariate Calculus', 'Object Oriented Programming with Java', 'Datamine Learning Community'], 
            img: purdue, 
            
        },
        {
            title: 'Naperville Central High School', 
            subheading: '',
            coursework: ['Calculus I and II', 'Physics C Mechanics and EM', 'Software Engineering', 'Micro/Macro Economics', 'Entrepreneurship'], 
            img: nchs, 
            activities: ['Varsity Track and Field', 'Vex Robotics Team', 'DECA', 'Indian Student Association']
            
        }


    ]
    const experiences = [
        {
            title: ['CEO', 'Accendre'],
            timeframe: ['September 2021', 'May 2023'],
            highlights: [ 'Founded an online workout service for student-athletes as a part of the Incubator Class at Naperville Central High School',
                          'Developed business plan and assigned roles and responsibilities of leadership team ',
                          'Created company website and user web app using React.js, HTML5, and CSS',
                          'Built back-end algorithm based on French Contrast Model in Python to generate sport-specific user workouts',
                          'Grew active user base by 200% by implementing algorithm in React app and creating customer acquisition channels'],
            img: accendre

        },
        {
            title: ['Code Sensei', 'Code Ninjas'],
            timeframe: ['July 2022', 'Present'], 
            highlights: [ 'Taught elementary and junior high aged children the basics of game development, ranging from web-based games in Javascript, to Roblox development in Lua, and Unity development in C#',
                          'Developed lesson plans and ran camps in topics such as web development, Python, Filmmaking, and Electronics',
                          'Tasked with presenting potential customers with benefits of learning computer science at an early age and selling program to parents'

            ],
            img: codeninjas
        }
    ]
    const skills = [
        {
            title: "Python",
            img: python
        },
        {
            title: "Java",
            img: java
        },
        {
            title: "JavaScript",
            img: js
        },
        {
            title: "HTML",
            img: html
        },
        {
            title: "CSS",
            img: css
        },
        {
            title: "ReactJS",
            img: react
        },
        {
            title: "C++/C#",
            img: cpp
        }, 
        {
            title: "Thinkorswim",
            img: thinkorswim,
            
        }, 
        
        
    ]
    return (
        <div
        className = "projects"
        id = "about"
        >
            <h1>About Me</h1>
            <div
            className = "bio"
            >
                <p>Hey there! I'm <b>Prajwal Shah</b>. and I'm currently a <b>Computer Science</b> student at <b>Purdue University</b>, I thrive on the excitement of coding and building projects using <b>Java, Python, JavaScript, and ReactJS</b>. Beyond the screen, I dive into the world of <b>economics, financial markets, and entrepreneurship</b>. When I'm not immersed in code or business ideas, you'll find me enjoying sports and staying active.</p>
            </div>
            <div
            className = "education"
            >
                <h2>Education</h2>
                {education.map(item =>{
                    return (
                        <div
                        className='school'
                        >
                            <div
                            className = 'schoolCon'
                            >
                                <h3>{item.title}</h3>
                                <h4><em>{item.subheading != "" ? item.subheading : ""}</em></h4>
                                <p>Relevant Coursework</p>
                                <ul>
                                    {item.coursework.map(item => (<li>{item}</li>))}
                                </ul>
                                <p>{item.activities != null ? "Activities" : ""}</p>
                                <ul>
                                    {item.activities != null ? item.activities.map(item => (<li>{item}</li>)) : ""}
                                </ul>
                            </div>

                            <img style = {{filter: "none"}} src = {item.img} ></img>
        
                        </div>
                    )
                })}
            </div>
            <div
            className = "experience"
            >
                <h2>Experience</h2>
                {experiences.map(item => {
                    return (
                        <div
                        className='school'
                        >
                            <div
                            className = 'schoolCon'
                            >
                                <h3><em>{item.title[0]}, </em>{item.title[1]}</h3>
                                <h4>{item.timeframe[0]} - {item.timeframe[1]}</h4>
                                <ul>
                                    {item.highlights.map(item => (<li>{item}</li>))}
                                </ul>
                            </div>

                            <img  className = 'expImg'  src = {item.img} ></img>
                        </div>
                    )
                })}

                
            </div>
            <div
            className = "skills"
            >
                <h2>Skills</h2>
                <div
                className='skillsCon'
                >
                {skills.map (item => {
                    return (
                        <div
                        className = 'skillsItem'
                        >
                        <img src = {item.img} />
                        <h2>{item.title}</h2>
                        </div>
                    )
                })}
                </div>

            </div>




        </div>
            
            

        );

}
