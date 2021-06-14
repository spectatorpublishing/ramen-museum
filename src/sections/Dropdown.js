import React from 'react';
import styled from 'styled-components';
import {useState, useRef} from 'react'
import Monav from './Monav';
import { Sling as Hamburger } from 'hamburger-react'

const Wrap = styled.div`
    display: block;

    @media only screen and (min-width: 500px) {
		display: none;
	}
`;

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
        <Wrap>
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
        </Wrap>
    );
};

export default Dropdown
