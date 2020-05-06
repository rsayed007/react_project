import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navebar = () =>{
    return(
        <nav className="nav-wrapper aqa darken-4">
            <div className="container">
                <div className="left">
                    <a href="/" className="brand-logo left">Roman's Time</a>
                </div>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navebar;