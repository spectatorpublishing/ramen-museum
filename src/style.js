import styled, {keyframes} from 'styled-components'
//Styled components apply to all sections

//day header
export const DayOfWeek=styled.h1`
    font-family: 'Bitter', serif;
    color: #0B0C0C;
    text-align:center;
    font-size:5vh;
    @media only screen and (max-width: 425px) {
        font-family:'Playfair Display', serif;
        font-weight: 800;
        text-align:left;
        background-color: #F6D1BD;
        width:max-content;
        padding:3vw;
        color:#8A1810;
    }
`;

//paragraph
export const Par=styled.div`
    font-family: 'Open Sans', sans-serif;
    width:65%;
    text-align:left;
    margin:auto;
    font-size:2.3vh;
    line-height:4vh;
    color:#000000;
    padding:0.5rem;
    @media only screen and (max-width: 425px) {
        font-family: 'Open Sans', sans-serif;
    }
`;

//squiggly divisors, only show on tablet/laptop
export const Vector=styled.img`
    width:100%;
    @media only screen and (max-width: 425px) {
        display:none;
    }
`;

//styling for images
export const Picture=styled.img`
    display:block;
    margin:auto;
    padding:2vw;
    width:40vw;
    @media only screen and (max-width: 425px) {
        width:70vw;
    }
`;

//Capitalizes/styles first letter of pars
export const FirstLetter=styled.span`
    @media only screen and (max-width: 425px) {
            font-family:'Playfair Display', serif;
            color: #872720;
            font-size:5.5vh;

        }
`;

//Displays left sqiggly lines
export const LeftVectors= styled.div`
    @media only screen and (max-width: 425px) {
            display: flex;
            flex-direction: row;
        }
`

//Flex div that holds back/forward buttons
export const Buttons= styled.div`
    width:80%;
    margin:auto;
    padding:2vw;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    @media only screen and (min-width: 426px) {
        display:none;
    }
`
//buttons
export const SwipeBtn= styled.button`
    display:flex;
    align-items: center;
    background-color: #FFFCF5;
    border:none;
    color:#23967F;
    font-size:5vw;
    text-decoration:none;
    font-family: 'Scada', sans-serif;
`
export const Arrow=styled.img`
    margin:2vw;
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

//swiping motion on mobile
const swipe=keyframes`
    0%{
        position:fixed;
        transform: translateX(50px); opacity:0.6;
    }
    100% {
        transform: translateX(0); opacity:1;
    }
`

//only show active day on mobile
export const ShowDay= styled.div`
    @media only screen and (max-width: 425px) {
        display:${props => props.current ? 'block': 'none'};
        animation-name: ${swipe};
        animation-duration: 1s;
    }
`

