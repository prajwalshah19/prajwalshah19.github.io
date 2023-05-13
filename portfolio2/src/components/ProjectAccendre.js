import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import '../App.css'
import AccendreIcon from '../assets/accendre.svg'
import insta from '../assets/instagram.svg'
import tiktok from '../assets/tiktok.svg'

import SlideShow from './SlideShow.js'

export function ProjectAccendre(props) {

    return (
        <div
        className='projects'
        id = "accendre"
        >
        
        <img src = {AccendreIcon} id = "titleImage"></img>
        
        <div className = 'synopsisCon'>
            <h2>About</h2>
            <h4>September 2021 - May 2023</h4>
            <p>During my junior year of highschool, I had the opportunity to take the Business Incubator class at Naperville Central High School. This class was centered around the idea of using the lean startup methodology to identify a gap in an industry and build a business around it. As an avid track and field athlete paired with a basketball player and football player, my team resolved to tackle the issue of inadequate availability of workout programs for athletes. To do this, we founded Accendre, an online fitness platform aimed toward improving athleticism through science-based sport specific training. Below is a summary of my experience.</p>
        </div>

        <div
        className = 'tocCon'
        >
        <Dropdown>
        <Dropdown.Toggle variant = 'light' id="tocMenu" >
            Table of Contents
        </Dropdown.Toggle>

        <Dropdown.Menu id = 'tocMenu'>
            <Dropdown.Item href="#busDev">Business Development</Dropdown.Item>
            <Dropdown.Item href="#entMind">Entrepreneurial Mindset</Dropdown.Item>
            <Dropdown.Item href="#comSkills">Communication Skills</Dropdown.Item>
            <Dropdown.Item href="#techStack">Tech Stack</Dropdown.Item>
            <Dropdown.Item href="#conclude">Conclusion</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        
        </div>

        <div
        className = 'synopsisCon'
        id = "busDev"
        >
            <h2>Business Development</h2>
            <p>Accendre through many iterations before reaching its final destination. At each stage of the process, we aimed to implement aspects of the lean startup methodology, especially the ideas of continuous validation and implementation to ensure our product development was efficient. </p>
            <div
            className='synopsisCon'
            id = "bmcCon"
            >
                <h3>Business Model Canvas</h3>
                <p>Like many startups, our business development plan started with the business model canvas. We started with the problem we wanted to solve - the lack of access high school athletes had to sport-specific training programs. From there, we built out our BMC, first developing a unique value proposition and then moving onto areas such as distribution channel, revenue stream, and early adopters.<br></br><br></br>Throughout this process, one of our biggest areas of uncertainty was the target market. While our product was built for high school athletes looking to move to the next level, these weren’t necessarily the people taking their wallets out and buying a subscription to Accendre. This caused a lot of back and forth as we didn’t know whether we should target these athletes on platforms such Tik Tok and Instagram or target their parents on Facebook. Eventually, we decided that it would be best to lean toward targeting the athletes who would in turn ask their parents to purchase the subscription, in the hope that it would create a more authentic user experience. Check out Accendre’s BMC below.</p>
                <div
                id = "bmcInteractive"
                >
                    <div id = 'problem' className='bmcICon' ></div>
                    <div id = 'competition' className='bmcICon'></div>
                    <div id = 'solution' className='bmcICon'></div>
                    <div id = 'keyMetrics' className='bmcICon'></div>
                    <div id = 'uvp' className='bmcICon'></div>
                    <div id = 'costStructure' className='bmcICon'></div>
                    <div id = 'customerRel' className='bmcICon'></div>
                    <div id = 'channels' className='bmcICon'></div>
                    <div id = 'targetMarket' className='bmcICon'></div>
                    <div id = 'earlyAdop' className='bmcICon'></div>
                    <div id = 'revenueModel' className='bmcICon'></div>

                </div>
            </div>
            <div
            className='synopsisCon'
            id = "caCon"
            >
                <h3>Customer Acquisition</h3>
                <p>Accendre's customer acquisition strategy involved several crucial steps to ensure a successful launch. Firstly, we launched user experience (UX) surveys to gauge potential customers' preferences and needs. Next, we conducted early adopter interviews to gain insights into their target audience's motivations and behavior. We also held focus groups with beta testers to gather feedback and make necessary adjustments. </p>
                
            </div>
            <div
            className='synopsisCon'
            
            >
                <h3>Prototype</h3>
                <div
                id = "prototypeCon"
                >
                    <p >Accendre’s prototype consisted of a two step approach to validating our idea while building the product. We started with a low tech, proof-of-concept prototype. For this, we approached a group of fifteen close friends, who also happened to be athletes, and asked them to fill out a short form detailing their sport and athletic goals. From there, each week we manually built them a workout program based on the French Contrast Model and sent it to them. At the end of every month, we also asked each beta user to fill out a feedback form highlighting changes that needed to be made. We were inspired to create a “wizard of oz” MVP (minimal viable product) like this from the founders of Zappos, and it allowed us to validate Accendre without having to approach the steep learning curve that comes with app development<br></br><br></br>Next, we got to work developing our web-app beta. This required an intensive from our team and even led us to recruit more teammates to join Accendre as a part of our software engineering team. For this beta, I served as the lead frontend and algorithm developer. First, I used Python to create an algorithm that generated workout programs that ran true to the French Contrast Model. Initially, the algorithm only supported athletes from track and field, basketball, and football, but eventually it encompassed every major high school sport. Additionally, I also had to learn Javascript and the React framework to construct our application. This was arguably the most difficult part of my job at Accendre, but also yielded a lot of positive feedback when we launched the web app to beta users.</p>

                    <SlideShow
                        className = "slides"
                        items = {[
                             {
                                img : 0, 
                                style : "prototype1",
                                title : "Low Tech MVP"


                            },
                            {
                                img : 1, 
                                style : "prototype1",
                                title : "Web App MVP"

                            }

                        ]}
                    />
                </div>
                
            </div>
            <div
            className='synopsisCon'
            >
                <h3>Marketing</h3>
                <div
                id = "marketingCon"
                >
                    <p>Accendre's primary approach to marketing revolved around utilizing social media platforms and word of mouth marketing to target high school athletes. By leveraging popular social media platforms such as Instagram and Tik Tok, the startup was able to build a strong online presence and create a buzz around its offerings. </p>
                <div
                id = 'marketingImageCon'
                >
                    <a href='https://instagram.com/_accendre?igshid=NTc4MTIwNjQ2YQ=='><img src = {insta} ></img></a>
                    <a href = 'https://www.tiktok.com/@accendre?_t=8cGvr7rY6Oc&_r=1'><img src = {tiktok}></img></a>

                </div>
                </div>
            </div>
        </div>

        <div
        className = 'synopsisCon'
        id = "entMind"
        >
        <h2>Entrepreneurial Mindset</h2>
        </div>


        <div
        className = 'synopsisCon'
        id = "comSkills"
        >
        <h2>Communication Skills</h2>
        </div>

        <div
        className = 'synopsisCon'
        id = "techStack"
        >
        <h2>Tech Stack</h2>
        </div>



        <div
        className = 'synopsisCon'
        id = "conclude"
        >
        <h2>Conclusion</h2>
        </div>



        </div>
            
            

        );

}
