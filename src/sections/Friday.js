//imgs
import vectors from '../images/vectors.png'
import Empty from '../images/Empty.png'
import Ramen from '../images/Ramen.png'
import Food from '../images/Food.png'
import leftArr from '../images/LeftArrow.png'
import styled from 'styled-components'
//articles
import {day_articles} from '../articles/articles.js';
import Dropdown from './Dropdown';
//styling
import { DayOfWeek,Vector, Par, Picture, FirstLetter, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg, createMarkup} from '../style.js';
import { device } from '../device';
import ramenLogo from '../images/ramen_museum_logo.png'


const ParContainer=styled.div`
    width:50%;
    @media only screen and (max-width: 1100px) {
        width:100%;
    }
`

const PicContainer=styled.div`
    width:40%;
    @media only screen and (max-width: 425px) {
        width:65%;
    }
`

const Sponsered = styled.div`

    display: flex;
    justify-content: flex-end;
    
    padding-right: 1rem;
        

    @media ${device.tablet} {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;    
    }
`;

const SponseredText = styled.p`
    color: black;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;

    font-size: 0.75rem;
    line-height: 2rem;

    a {
        color: black;
    }
    
    @media ${device.tablet} {
        font-size: 1.5rem;
        line-height: 2rem;
    }
`;


const RamenLogoImg = styled.img`
    width: 10rem;
    padding-top: 1.2rem;

    @media ${device.tablet} {
    }

    @media ${device.laptop} {
        width: 20rem;
        padding-top: 1.3rem;
    }

    @media ${device.laptopS} {
        width: 20rem;
        padding-top: 1.3rem;
    }
`;



//flex column display for friday component
export const ColumnDisplay= styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    width:65%;
    margin:auto;
    align-items:center;
    @media only screen and (max-width: 1100px) {
        flex-direction:column;
    }
`

export const CroissantPic=styled.img`
    width:100%;
    display:block;
    margin:auto;
    padding:2vw;
`

const Friday = ({current}) => {
    return (
        <ShowDay id="Friday" current={current==="#Friday"}>
            <SBSLogo>
                <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                    <SBSLogoImg src="https://sbs-assets.s3.amazonaws.com/sbs-logo.png" alt="Spectator Brand Studios Logo" />
                </a>
                <Dropdown/>
            </SBSLogo>
            <DayOfWeek >Friday</DayOfWeek>
            <ColumnDisplay>
                <ParContainer>
                    <Par style={{width:'100%'}}><FirstLetter>{day_articles[4].friday1[0]}</FirstLetter>{day_articles[4].friday1.slice(1)}</Par>
                    <Par style={{width:'100%'}}>{day_articles[4].friday2}</Par>
                </ParContainer>
                <PicContainer>
                    <CroissantPic src={Food} alt="Croissant and other pastries"/>
                </PicContainer>
            </ColumnDisplay>
                <Par dangerouslySetInnerHTML={createMarkup(day_articles[4].friday3)} />
                <Par>{day_articles[4].friday4}</Par>
                <Picture src={Ramen} alt="Ramen"/>
                <Par>{day_articles[4].friday5}</Par>
                <Vector src={vectors}/>
                <Sponsered>
                    <SponseredText>Sponsored Content for {" "}
                    <a href="https://ramenmuseum.nyc/" target="_blank" rel="noreferrer">
                        Ramen Museum New York
                    </a>              
                    </SponseredText>  
                </Sponsered>
                <Buttons> 
                    <BtnLink href="#Thursday"><SwipeBtn ><Arrow alt="Back arrow" src={leftArr}/>THURSDAY</SwipeBtn></BtnLink>
                </Buttons>  
        </ShowDay>
    )
}

export default Friday
