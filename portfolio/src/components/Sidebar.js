import React from 'react';
import '../App.scss'

import menu from '../assets/menu.svg'
import linkedin from '../assets/linked.svg'
import github from '../assets/github.svg'
import cross from '../assets/cross.svg'
export function Sidebar(props) {

    const [open, setOpen] = React.useState(false);
    function handleOpen() {
        console.log(open)
        setOpen(prev => !prev)
        
    }

    return (
        <div
        className = 'sidebarCon'
        >
            <div className="sidebar">
            
            <div
            className='sidebarElements'
            >
            <a>about</a>
            <a>projects</a>
            <a>progress</a>
            <a>contact</a>


            

            <div
            className='logoCon'
            >
                <a href='https://www.linkedin.com/in/prajwalshah/'><img src = {linkedin} ></img></a>
                <a href = 'https://github.com/prajwalshah19'><img src = {github}></img></a>

            </div>

            <p className='footer'>&copy; Prajwal Shah. Made with React</p>
            </div>
            <div
            className='menuCon'
            >
            <img src = {menu} onClick = {handleOpen}/> 

            
                </div>
            </div>

        { open ? (

            
            <div
            className='fullScreenMenu'
            >
                <div
                className='fullScreenImageCon'
                >
                    <img src = {cross} onClick = {handleOpen}/> 
                </div>
            
                <div
                className='fullScreenItems'
                >
                    <a>about</a>
                    <a>projects</a>
                    <a>progress</a>
                    <a>contact</a>

                </div>


                <div
            className='logoCon'
            >
                <a href='https://www.linkedin.com/in/prajwalshah/'><img src = {linkedin} ></img></a>
                <a href = 'https://github.com/prajwalshah19'><img src = {github}></img></a>

            </div>

            <div
            className='footerCon'
            >
            <p className='footer'>&copy; Prajwal Shah. Made with React</p>
            </div>
            </div>
        ) : null


        }
        </div>
      );

    }

