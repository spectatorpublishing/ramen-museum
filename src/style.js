import styled from 'styled-components'
//Styled components apply to all sections

//day header
export const DayOfWeek=styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@700&display=swap');
    font-family: 'Bitter', serif;
    color: #0B0C0C;
    text-align:center;
    font-size:5vh;
    @media only screen and (max-width: 425px) {
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
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
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    width:65%;
    text-align:left;
    margin:auto;
    font-size:2.3vh;
    line-height:4vh;
    color:#000000;
    padding:0.5rem;
    @media only screen and (max-width: 425px) {
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
        font-family:'Playfair Display', serif;
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
export const ButtonCont= styled.div`
    width:70%;
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
    @import url('https://fonts.googleapis.com/css2?family=Scada&display=swap');
    display:flex;
    align-items: center;
    background-color: #FFFCF5;
    border:none;
    color:#23967F;
    font-weight: 600;
    text-decoration:underline;
    font-family: 'Scada', sans-serif;
`
//buttons onclick function
export const swipe=(e)=>{
    console.log(e.target.value);
    window.location.replace(`/${e.target.value}`)
}