//imgs
import vectors from '../images/vectors.png'
import Empty from '../images/Empty.png'
import Ramen from '../images/Ramen.png'
import Food from '../images/Food.png'
import leftArr from '../images/LeftArrow.png'
import styled from 'styled-components'
//articles
import {day_articles} from '../articles/articles.js';
//styling
import { DayOfWeek,Vector, Par, Picture, FirstLetter, Buttons, SwipeBtn, Arrow, ShowDay} from '../style.js';

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
                <Par>{day_articles[4].friday3}</Par>
                <Picture src={Empty} alt="Placeholder image"/>
                <Par>{day_articles[4].friday4}</Par>
                <Picture src={Ramen} alt="Ramen"/>
                <Par>{day_articles[4].friday5}</Par>
                <Vector src={vectors}/>
                <Buttons> 
                    <a href="#Thursday"><SwipeBtn ><Arrow alt="Back arrow" src={leftArr}/>THURSDAY</SwipeBtn></a>
                </Buttons>  
        </ShowDay>
    )
}

export default Friday
