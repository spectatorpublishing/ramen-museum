//imgs
import Empty from '../images/Empty.png'
import Man from '../images/manEating.png'
import TikTok from '../images/TikTok.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import styled from 'styled-components'
//articles
import {day_articles} from '../articles/articles.js';
//styling
import { DayOfWeek,Vector,Picture, FirstLetter,Par, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink} from '../style.js';

const TikTokPic=styled.img`
    display:block;
    margin:auto;
    padding:2vw;
    width:25vw;
    @media only screen and (max-width: 768px) {
        width:40vw;
    }
`

const Wednesday = ({current}) => {
    return (
        <ShowDay id="Wednesday" current={current==="#Wednesday"}>
            <DayOfWeek>Wednesday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[2].wednesday1[0]}</FirstLetter>{day_articles[2].wednesday1.slice(1)}</Par>
                        <TikTokPic src={TikTok} alt="Tik Tok screenshot"/>
                        <Par>{day_articles[2].wednesday2}</Par>
                        <Picture src={Empty} alt="Placeholder image"/>
                        <Buttons> 
                            <BtnLink href="#Tuesday"><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/>TUESDAY</SwipeBtn></BtnLink>
                            <BtnLink href="#Thursday"><SwipeBtn>THURSDAY<Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></BtnLink>
                        </Buttons> 
                <Vector src={Man}/>
        </ShowDay>
    )
}

export default Wednesday
