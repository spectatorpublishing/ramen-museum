import {day_articles} from '../articles/articles.js';
import vectors from '../images/Vectors.png'
import verVectors from '../images/verticalVectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import styled from 'styled-components';
import { DayOfWeek, Vector, FirstLetter, LeftVectors, ButtonCont, SwipeBtn, swipe} from '../style.js';

export const VerVector= styled.img`
    width:12%;    
    @media only screen and (min-width: 426px) {
        display: none;
    }
`

export const VectorPar=styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    width:70%;
    text-align:left;
    margin:auto;
    font-size:2.3vh;
    line-height:4vh;
    padding:0.5rem;
    @media only screen and (max-width: 425px) {
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
        margin-left:1rem;
    }
`

const Monday = () => {
    return (
            <div id="Monday">
                <DayOfWeek>Monday</DayOfWeek> 
                <LeftVectors>
                    <VerVector src={verVectors} alt="Vertical wavy design"/>
                    <div>
                        <VectorPar><FirstLetter>{day_articles[0].monday1[0]}</FirstLetter>{day_articles[0].monday1.slice(1)}</VectorPar>
                        <VectorPar>{day_articles[0].monday2}</VectorPar>
                        <VectorPar>{day_articles[0].monday3}</VectorPar>
                        <ButtonCont style={{margin:'5vw'}}> 
                            <SwipeBtn value= "" onClick={(e)=>swipe(e)}><img alt="Back arrow" src={leftArr}/> HOME</SwipeBtn> <SwipeBtn value= "#Tuesday" onClick={(e)=>swipe(e)}>TUESDAY <img alt="Forward arrow" src={rightArr}/></SwipeBtn>
                        </ButtonCont>  
                    </div>
                </LeftVectors>
                <Vector src={vectors}/>
                    
            </div>
    )
}

export default Monday
