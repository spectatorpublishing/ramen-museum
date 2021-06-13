//imgs
import vectors from '../images/vectors.png'
import verVectors from '../images/verticalVectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import styled from 'styled-components';
//articles
import {day_articles} from '../articles/articles.js';
import Dropdown from './Dropdown';
//styling
import { DayOfWeek, Vector, FirstLetter, LeftVectors, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg} from '../style.js';

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
            <ShowDay id="Monday" current={current==="#Monday"}>
                <SBSLogo>
                    <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                        <SBSLogoImg src="https://s3-alpha-sig.figma.com/img/bc56/e07b/f46e166c7aeb0aa87b7e4c776ee1bad9?Expires=1623628800&Signature=EbYyp-bniIGZfV9KGJPhKqXlLeciNVtyVY2vVGMNwbKo8Qwsfsei2hn1tqk40HEFg5A3S5s5-xVSbCPVJCdrDqnE3t6Lz2L5Pa5RBlAjSP5TfWZtFpJLZJrN4RtS1UKhlppgu93Qcs~ouPQqBwyJGPhwpRvPBfrUV4MSXQ4S0DUjsd~dqH~Ftu0~EGPuOEn7R~QUvz-pOyzfi~jfam61KoT~OznLSgUzTfOoa46pA2stB9pHvCg1c6AdsBBxlpOF2Bvf1LQTlwCgyf5YW8HGOlllsHAMmUk1QyGWUeiP0MRMkUqEdyyuwYixm9qkYRVUmdUl6RD6TlWrQ1Rl8Cj5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Spectator Brand Studios Logo" />
                    </a>
                <Dropdown/>
                </SBSLogo>
                <DayOfWeek>Monday</DayOfWeek> 
                <LeftVectors>
                    <VerVector src={verVectors} alt="Vertical wavy design"/>
                    <div>
                        <VectorPar><FirstLetter>{day_articles[0].monday1[0]}</FirstLetter>{day_articles[0].monday1.slice(1)}</VectorPar>
                        <VectorPar>{day_articles[0].monday2}</VectorPar>
                        <VectorPar>{day_articles[0].monday3}</VectorPar>
                        <Buttons style={{margin:'5vw'}}> 
                            <BtnLink href="/" ><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/> HOME</SwipeBtn></BtnLink>
                            <BtnLink href="#Tuesday"><SwipeBtn>TUESDAY <Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></BtnLink>
                        </Buttons>  
                    </div>
                </LeftVectors>
                <Vector src={vectors}/>        
            </ShowDay>
    )
}

export default Monday
