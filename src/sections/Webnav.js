import React from 'react';
import styled from 'styled-components';



const Webdiv = styled.div`
    display: none;

    @media only screen and (min-width: 426px){  
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-evenly;
        line-height: 226%;
        background: #a05c50;
        padding:1.5vh;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }

    a{
        font-family: Bitter;
        font-size: 2vw;
        font-weight: 500;
        font-style: italic;   
        color: white;
        text-decoration: none;
        @media only screen and (max-width: 700px) {
            font-size: 2.5vw;
    }

        &.active{
            font-weight: 700;
            font-size: 2.5vw;
            font-style: normal;
        }
    }


`

const Webnav = () => (

    

        <Webdiv>   

         
            <a href= "#Monday">MONDAY</a>
            <a href= "#Tuesday">TUESDAY</a>
            <a href= "#Wednesday">WEDNESDAY</a>
            <a href= "#Thursday">THURSDAY</a>
            <a href= "#Friday">FRIDAY</a>
                

        </Webdiv>

    

);

export default Webnav;