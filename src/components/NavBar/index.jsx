import React from 'react';
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container">
    <Link to="/">
          <img src="./logomartele.jpg" width="110" height="80" className="logo-brand" alt="logo" aria-label="Home"/>
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <NavLink className="nav-link"  to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/categoria/bombillas'>Bombillas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/categoria/mates'>Mates</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/categoria/yerbas' >Yerbas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/categoria/setmatero' >Set matero</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-auto">
                    <NavLink className="nav-link" to='cart'>
                        <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    )
} 

export default NavBar; 