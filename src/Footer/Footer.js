import React from 'react'
import './Footer.scss'
import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { AiFillBehanceCircle, AiFillInstagram } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';

function Footer() {
    return (
        
            <div className="footer">
                <h4>© 2022 Lucas Vieira</h4>
                
                <IconContext.Provider value={{ className: "footer-icons"}}>
                <div className="links">
                <a href="https://www.linkedin.com/in/lucas-vieira-2aa934218/"><FaLinkedinIn /></a>
                <a href="https://github.com/901284"><FaGithub /></a>
                <a href="https://www.instagram.com/carrougess/"><AiFillInstagram /></a>
                <a href="https://www.behance.net/lucasavieira"><AiFillBehanceCircle /></a>
                </div>
                </IconContext.Provider>
            

            </div>

    )
}

export default Footer