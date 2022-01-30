import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import MenuIcon from '../Assets/menu.svg'
import { GiRose } from "react-icons/gi";

function Header() {
    return (
            <header>
                <GiRose size="2rem" />
                
                <ul className="menu-items">
                    <li>
                        <Link to="/" className='effect-underline'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='effect-underline'>About</Link>
                    </li>
                    <li>
                        <Link to="/projects"  className='effect-underline'>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact"  className='effect-underline'>Contact</Link>
                    </li>
                </ul>
            </header>
    )
}

export default Header