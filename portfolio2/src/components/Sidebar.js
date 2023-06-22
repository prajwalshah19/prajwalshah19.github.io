import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom'
import menu from '../assets/menu.svg'
import linkedin from '../assets/linked.svg'
import github from '../assets/github.svg'
import cross from '../assets/cross.svg'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
export function Sidebar(props) {

    let navigate = useNavigate()

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
            className = "topCon"
            >
                <Link to = "/" > <img className = "logoImg" src = {logo}></img></Link>

            </div>
            
            <div
            className='sidebarElements'
            >
              <ul>
                <li>< Link to = "/about" ><a>about</a></Link></li>
                <li>< Link to = "/projects" ><a>projects</a></Link></li>
                <li>< Link to = "/progress" ><a>progress</a></Link></li>
                <li>< Link to = "/contact" ><a>contact</a></Link></li>

            </ul>  

            

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
              <ul>
                <li>< Link to = "/" onClick = {handleOpen}><a>home</a></Link></li>
                <li>< Link to = "/about" onClick = {handleOpen} ><a>about</a></Link></li>
                <li>< Link to = "/projects" onClick = {handleOpen} ><a>projects</a></Link></li>
                <li>< Link to = "/progress" onClick = {handleOpen} ><a>progress</a></Link></li>
                <li>< Link to = "/contact" onClick = {handleOpen} ><a>contact</a></Link></li>

            </ul>  

                </div>


                <div
            className='logoCon'
            >
                <a href='https://www.linkedin.com/in/prajwalshah/' target="_blank" onClick = {handleOpen}><img src = {linkedin} ></img></a>
                <a href = 'https://github.com/prajwalshah19' target="_blank" onClick = {handleOpen} ><img src = {github}></img></a>

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

