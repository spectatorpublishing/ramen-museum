import React from 'react';
import styled from 'styled-components';

import foodBackground from '../images/top_background.png'
import vector from '../images/top_overlay_vector.png'
import ramenLogo from '../images/ramen_museum_logo.png'

import foodBackgroundMobile from '../images/top_background_mobile.png'
import vectorMobile from '../images/top_overlay_mobile.png'

import verVectors from '../images/verticalVectors.png'

import { device } from '../device';

import {FirstLetter, LeftVectors} from '../style.js';
import {day_articles} from '../articles/articles.js';


const Wrapper1 = styled.div`
    background-image: url(${foodBackgroundMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media ${device.tablet} {
        background-image: url(${foodBackground});
        background-position: left;
        background-repeat: no-repeat;
        background-size: cover;
    }

`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${vectorMobile});
    background-size: cover;
    background-position: center;

    @media ${device.tablet} {
        background-image: url(${vector});
        background-position: left;
        background-repeat: no-repeat;
        background-size: cover;

    }
`;

const SBSLogo = styled.div`
    background: #FFFCF5;
    display: flex;
    padding: 1rem;
    justify-content: center;

    @media ${device.tablet} {
        background: none;
        padding: 2rem;
        justify-content: left;
    }

`;

const SBSLogoImg = styled.img`
    width: 6rem;
`;

const Title = styled.div`
    display: none; 
    
    @media ${device.tablet} {
        display: flex;
        align-self: flex-start;
        padding-left: 5rem;
        padding-right: 15rem;
        padding-top: 6rem;
    }

`;

const LeftTitle = styled.h1`
    display: none;    

    @media ${device.tablet} {
        display: flex;    
        color: #A05C50;
        font-family: Bitter;
        font-style: italic;
        font-weight: bold;

        font-size: 2.5rem;
    }

`;

const RightTitle = styled.h1`
    display: none;    

    @media ${device.tablet} {
        display: flex;    
        color: black;
        font-family: Bitter;
        font-style: normal;
        font-weight: 500;
        
        font-size: 2.5rem;
        padding-left: 0.5rem;
    }

`;

const LeftTitleMobile = styled.h1`
    color: #A05C50;
    font-family: Bitter;
    font-style: italic;
    font-weight: bold;
    
    font-size: 1.5rem;

    padding-top: 0rem;
    padding-left: 1rem;

    @media ${device.tablet} {
        display: none;
    }

`;

const RightTitleMobile = styled.h1`
    color: black;
    font-family: Bitter;
    font-style: normal;
    font-weight: 500;
    
    font-size: 1.5rem;
    text-align: right;

    padding-right: 5rem;
    padding-bottom: 0rem;


    @media ${device.tablet} {
        display: none;
    }
`;

const IntroWrapper = styled.div`
    display: none;
    
    @media ${device.tablet} {
        display: flex;
        align-self: flex-start;
    
        padding-left: 7rem;
        padding-right: 15rem;
       
    }
`;


const MainText = styled.p`
    color: black;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;

    font-size: 1rem;
    line-height: 1.5rem;

    @media ${device.tablet} {
        font-size: 1.25rem;
        line-height: 2rem;
    }
`;

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

const IntroWrapperMobile = styled.div`

    background: #FFFCF5;

    display: flex;
    flex-direction: column;
    align-self: flex-start;

    @media ${device.tablet} {
        display: none;
    }

`;

const MobileStartButtonWrapper = styled.div`

    display: flex;
    justify-content: center;

    @media ${device.tablet} {
        display: none;
    }

`;


const MobileStartButton = styled.button`
    background: #F6D1BD;
    border-radius: 5px;

    width: 212px;
    height: 44px;
    left: 85px;
    top: 793px;
    
    font-family: Bitter;
    font-style: italic;
    font-weight: normal;
    font-size: 1rem;
    color: #872720;
    
    @media ${device.tablet} {
        display: none;
    }

`;

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

//only show active day on mobile
export const Mobile= styled.div`
    @media only screen and (max-width: 425px) {
        display:${props => props.current ? 'block': 'none'};
    }
`

const Home = ({current}) => (
    <>
     <Mobile id="/" current={current==="/"}>
        <Wrapper1 >
            <TextWrapper>
                <SBSLogo>
                    <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                        <SBSLogoImg src="https://s3-alpha-sig.figma.com/img/bc56/e07b/f46e166c7aeb0aa87b7e4c776ee1bad9?Expires=1623628800&Signature=EbYyp-bniIGZfV9KGJPhKqXlLeciNVtyVY2vVGMNwbKo8Qwsfsei2hn1tqk40HEFg5A3S5s5-xVSbCPVJCdrDqnE3t6Lz2L5Pa5RBlAjSP5TfWZtFpJLZJrN4RtS1UKhlppgu93Qcs~ouPQqBwyJGPhwpRvPBfrUV4MSXQ4S0DUjsd~dqH~Ftu0~EGPuOEn7R~QUvz-pOyzfi~jfam61KoT~OznLSgUzTfOoa46pA2stB9pHvCg1c6AdsBBxlpOF2Bvf1LQTlwCgyf5YW8HGOlllsHAMmUk1QyGWUeiP0MRMkUqEdyyuwYixm9qkYRVUmdUl6RD6TlWrQ1Rl8Cj5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Spectator Brand Studios Logo" />
                    </a>
                </SBSLogo>

                
                <Title>
                    <LeftTitle>Food for Thought: </LeftTitle>
                    <RightTitle>Reading Week in NYC</RightTitle>
                </Title>
                
                <LeftTitleMobile>Food for Thought: </LeftTitleMobile>
                <RightTitleMobile>Reading Week in NYC</RightTitleMobile>

                <IntroWrapper>
                    <MainText>It’s that time of year we all dread: Reading Week, or as more famously known, Hell Week. 
                        I know how stressful it can be staying up till 3 a.m. cooped up in your room or Butler Ref 
                        cramming months’ worth of material into a single week without having time for much else. But, 
                        as a self-proclaimed food enthusiast on a never-ending quest for delicious finds, I won’t let 
                        Hell Week stop me. I’ll show you how I satisfy my cravings for good food while studying for 
                        finals at Columbia. This is a Hell Week in the life of a foodie. 
                        </MainText>
                </IntroWrapper>

                <Sponsered>
                    <SponseredText>Sponsered Content for </SponseredText>
                    <a href="https://ramenmuseum.nyc/" target="_blank" rel="noreferrer">
                        <RamenLogoImg src={ramenLogo} alt="Ramen Museum New York Logo" />
                    </a>                
                </Sponsered>

            </TextWrapper>
        </Wrapper1>

        <IntroWrapperMobile>
            <LeftVectors>
                <VerVector src={verVectors} alt="Vertical wavy design"/>
                <div>
                    <VectorPar><FirstLetter>{day_articles[5].intro[0]}</FirstLetter>{day_articles[5].intro.slice(1)}</VectorPar>
                    <MobileStartButtonWrapper>
                        <a href="#Monday">
                            <MobileStartButton>Start a Foodie's Week</MobileStartButton></a>
                    </MobileStartButtonWrapper>      
                </div>
            </LeftVectors>
        </IntroWrapperMobile>

        </Mobile>
    </>
);

export default Home;