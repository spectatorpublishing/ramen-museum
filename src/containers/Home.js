import React from 'react';
import styled from 'styled-components';

import foodBackground from '../images/top_background.png'
import vector from '../images/top_overlay_vector.png'
import ramenLogo from '../images/ramen_museum_logo.png'

import { device } from '../device';

const Wrapper1 = styled.div`
    background-image: url(${foodBackground});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;

    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    background-image: url(${vector});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    
    margin: auto;
    padding: 1rem;
    width: fit-content;
    text-align: left;

    @media ${device.laptopS} {
        margin-left: 0;
        padding: 0;
        width: inherit;
    }
`;

const SBSLogo = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: left;

    @media ${device.laptopS} {
        justify-content: left;
        padding-bottom: 0rem;
    }
`;

const SBSLogoImg = styled.img`
    width: 6rem;
`;

const Title = styled.div`
    display: flex;
    align-self: flex-start;
    padding-left: 5rem;
    padding-right: 15rem;
    padding-top: 4rem;

`;


const LeftTitle = styled.h1`
    color: #A05C50;
    font-family: Bitter;
    font-style: italic;
    font-weight: bold;
    font-size: 2.5rem;
    
    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
    }

    @media ${device.laptop} {
    }
`;

const RightTitle = styled.h1`
    color: black;
    font-family: Bitter;
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;

    padding-left: 0.5rem;


    @media ${device.tablet} {
    }

    @media ${device.laptopS} {

    }

    @media ${device.laptop} {
    }
`;

const IntroWrapper = styled.div`
    display: flex;
    align-self: flex-start;

    padding-left: 7rem;
    padding-right: 15rem;

    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
       
    }

    @media ${device.laptop} {
    }
`;


const MainText = styled.p`
    color: black;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 2rem;
    
    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
    }

    @media ${device.laptop} {
    }
`;

const Sponsered = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;

    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
       
    }

    @media ${device.laptop} {
    }
`;

const RamenLogoImg = styled.img`
    width: 15rem;
    padding-top: 1.5rem;
`;



const Wrapper2 = styled.div`
    background: black;
    height: 150vh;

`;

const Home = () => (
    <>
        <Wrapper1 id="home">
            {/*<img src={vector} alt="vector"/> */}             
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

                <IntroWrapper>
                    <MainText>It’s that time of year we all dread: Reading Week, or as more famously known, Hell Week. 
                        I know how stressful it can be staying up till 3 a.m. cooped up in your room or Butler Ref 
                        cramming months’ worth of material into a single week without having time for much else. But, 
                        as a self-proclaimed food enthusiast on a never-ending quest for delicious finds, I won’t let 
                        Hell Week stop me. I’ll show you how I satisfy my cravings for good food while studying for 
                        finals at Columbia. This is a Hell Week in the life of a foodie. </MainText>
                </IntroWrapper>
                <Sponsered>
                    <MainText>Sponsered Content for </MainText>
                    <a href="https://ramenmuseum.nyc/" target="_blank" rel="noreferrer">
                        <RamenLogoImg src={ramenLogo} alt="Ramen Museum New York Logo" />
                    </a>
                    {/*<img src={ramenLogo} alt="Ramen Museum New York Logo"/> </Sponsered> */}                
                
                </Sponsered>

            </TextWrapper>
        </Wrapper1>
        {/*nav bar and days components below*/}
        <Wrapper2>
        </Wrapper2>

    </>
);

export default Home;