import React from 'react';
import styled from 'styled-components';
import {useState, useRef} from 'react'
import Monav from './Monav';


const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
  
    return (
        <div className="menu-container">
            <button onClick={onClick}>
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
            </button>  
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div>
                    <Monav/>
                </div>
            </nav>
        </div>
    );
};

export default Dropdown
