import styled from 'styled-components'

export const DayOfWeek=styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@700&display=swap');
    font-family: 'Bitter', serif;
    color: #0B0C0C;
    text-align:center;
    font-size:1.8rem;
    @media only screen and (max-width: 768px) {
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

export const Par=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    width:65%;
    text-align:left;
    margin:auto;
    font-size:2.3vh;
    line-height:2rem;
    color:#000000;
    padding:0.5rem;
    @media only screen and (max-width: 768px) {
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
        font-family:'Playfair Display', serif;

    }
`;

export const Body = styled.div`
    background-color:#FFFCF5;
    padding:3% 0 10% 0;
`;

export const Vector=styled.img`
    width:100%;

`;
export const Picture=styled.img`
    display:block;
    margin:auto;
    padding:2vw;
    width:40vw;

`;

export const SideBySide= styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    width:65%;
    margin:auto;
    align-items:center;
    @media only screen and (max-width: 1100px) {
        flex-direction:column;
    }
`;

export const FirstLetter=styled.span`
    @media only screen and (max-width: 768px) {
            color: #872720;
            font-size:5.5vh;
        }
`;
