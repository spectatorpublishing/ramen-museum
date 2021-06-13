import React from 'react';
import styled from 'styled-components';
import {useState, useRef} from 'react'
import Monav from './Monav';
import { Sling as Hamburger } from 'hamburger-react'



const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const onClick = () => setIsActive(!isActive);

    const closeMenu = () => {
        setIsActive(!isActive)
        setOpen(false)
    }
  
    return (

        <div className="menu-container">
            <button class = "navbutt" onClick={onClick}>
            <Hamburger color = "#872720" toggled={isOpen} toggle={setOpen}/>
            </button>  
            <nav onClick = {onClick} ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`} >
                <div>
                    <Monav close = {closeMenu}></Monav>
                </div>
            </nav>
        </div>

    );
};

export default Dropdown
