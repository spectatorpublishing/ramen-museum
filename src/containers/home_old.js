import React from 'react';
import styled from 'styled-components';

import vector from '../images/top_overlay_vector.png'
import ramenLogo from '../images/ramen_museum_logo.png'

import { device } from '../device';

const Wrapper1 = styled.div`
    background-image: url(https://s3-alpha-sig.figma.com/img/1a28/895d/fcc125d44e25b4b14f1c759cf674fa5b?Expires=1623024000&Signature=ccjo2IDnSKLKgNyROBKNKET4oX13O8xSzaN7viLtUuTEpD9dtnu~1fUa4L4u94Ky5WzAPTudstz0EMq3p8ANyLaUx4V9cBv22ESpOhEPZX22eEPMG6rAdllBbKE4zKj8gdvf-NZ0kqcvnOBJPC3MANcTLFSFJwh~2SP59RzKbTqlMczCVSWX33I-S~WdjWQAcm4ST3tkNgLHsyvBvkCKxeehcbS~uEReUmJHJpeIFLwPnzsp288AtiTURXZTXxB4fg2m-g4QN9S4p4V277cBBLVGKsmtar-UXwCAr0BniOdPZg1wUPDTUzrWz1tCS7AkaS8LXItAkaMLxczdnKgxUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
    

    background-position: center;
    height: 750px;

    @media ${device.tablet} {
        height: 175vh;
    }

    @media ${device.laptopS} {
        background: #251282;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    background-image: url(${vector});
    background-position: center;
    
    margin: auto;
    padding: 1rem;
    width: fit-content;
    text-align: left;

    @media ${device.laptopS} {
        margin-left: 0;
        background: none;
        padding: 0;
        width: inherit;
    }
`;

const SBSLogo = styled.div`
    display: flex;
    padding: 1rem;
    padding-bottom: 1rem;
    justify-content: left;

    @media ${device.laptopS} {
        justify-content: left;
        padding-bottom: 0rem;
    }
`;

const SBSLogoImg = styled.img`
    width: 8rem;
`;

const Title = styled.div`
    display: flex;
    align-self: flex-start;

    padding-left: 5rem;
`;


const LeftTitle = styled.h1`
    color: #A05C50;
    font-family: Bitter;
    font-style: italic;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    
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
    font-size: 40px;
    line-height: 48px;

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
    justify-content: center;
    align-self: center


    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
       
    }

    @media ${device.laptop} {
    }
`;


const MainText = styled.p`
    color: black;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 31px;
    
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

    @media ${device.tablet} {
    }

    @media ${device.laptopS} {
       
    }

    @media ${device.laptop} {
    }
`;

const RamenLogoImg = styled.img`
    width: 13rem;
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