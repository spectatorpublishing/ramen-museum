import React from 'react';
import styled from 'styled-components';



const Navdiv = styled.div`

    @media only screen and (max-width: 425px){  
        display: flex;
        flex-direction: column;
        text-align: center;
        line-height: 226%
    }

    display: none;

    a{
        font-family: Bitter;
        font-size: 18px;   
        color: #872720;
        text-decoration: none;

        &.active{
            background #F6D1BD;;
        }
    }


`




const Monav = ({close}) => (

   

        <Navdiv onClick= {close} exact>   

            <a href="/">HOME</a>
            <a href= "#Monday" >MONDAY</a>
            <a href= "#Tuesday">TUESDAY</a>
            <a href= "#Wednesday">WEDNESDAY</a>
            <a href= "#Thursday">THURSDAY</a>
            <a href= "#Friday">FRIDAY</a>
                

        </Navdiv>

    

);

export default Monav;