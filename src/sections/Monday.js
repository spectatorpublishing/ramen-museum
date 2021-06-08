//imgs
import vectors from '../images/Vectors.png'
import verVectors from '../images/verticalVectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import styled from 'styled-components';
//articles
import {day_articles} from '../articles/articles.js';
//styling
import { DayOfWeek, Vector, FirstLetter, LeftVectors, Buttons, SwipeBtn, Arrow, ShowDay} from '../style.js';

export const VerVector= styled.img`
    width:12%;    
    @media only screen and (min-width: 426px) {
        display: none;
    }
`

export const VectorPar=styled.p`
    font-family: 'Open Sans', sans-serif;
    width:70%;
    text-align:left;
    margin:auto;
    font-size:2.3vh;
    line-height:4vh;
    padding:0.5rem;
    @media only screen and (max-width: 425px) {
        margin-left:1rem;
    }
`

const Monday = ({current}) => {
    return (
            <ShowDay id="Monday" current={current==="#Monday"|| current==="/"}>
                <DayOfWeek>Monday</DayOfWeek> 
                <LeftVectors>
                    <VerVector src={verVectors} alt="Vertical wavy design"/>
                    <div>
                        <VectorPar><FirstLetter>{day_articles[0].monday1[0]}</FirstLetter>{day_articles[0].monday1.slice(1)}</VectorPar>
                        <VectorPar>{day_articles[0].monday2}</VectorPar>
                        <VectorPar>{day_articles[0].monday3}</VectorPar>
                        <Buttons style={{margin:'5vw'}}> 
                            <a href="/" ><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/> HOME</SwipeBtn></a>
                            <a href="#Tuesday"><SwipeBtn>TUESDAY <Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></a>
                        </Buttons>  
                    </div>
                </LeftVectors>
                <Vector src={vectors}/>        
            </ShowDay>
    )
}

export default Monday
