import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const  [isOpen, setOpen] = useState(false);
  return (
    <nav 
    className='navbar is-info' 
    role='navigation' 
    aria-label='main navigation'>
        <div className='container'>
            <div className='navbar-brand'>
                <button href='#'  className={`navbar-burger burger ${isOpen && "is-active"}`}
                aria-label='menu'
                aria-expanded='false'
                onClick={() => setOpen(!isOpen)}
                 >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                 </button>
            </div>
            <div className={`navbar-menu ${isOpen && "is-active"}`}>
                <div className='navbar-start'>
                    <NavLink className='navbar-item' activeClassName='is-active' to="/">Home</NavLink>
                    <NavLink className='navbar-item' activeClassName='is-active' to="/about">About</NavLink>
                    <NavLink className='navbar-item' activeClassName='is-active' to="/profile">Profile</NavLink>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <button className='button is-white' href='#'>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;