import {day_articles} from '../articles/articles.js';
import Empty from '../images/Empty.png'
import Man from '../images/ManEating.png'
import TikTok from '../images/TikTok.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import styled from 'styled-components'
import { DayOfWeek,Vector,Picture, FirstLetter,Par, ButtonCont, SwipeBtn, swipe} from '../style.js';

const TikTokPic=styled.img`
    display:block;
    margin:auto;
    padding:2vw;
    width:25vw;
    @media only screen and (max-width: 425px) {
        width:40vw;
    }
`

const Wednesday = () => {
    return (
        <div id="Wednesday">
            <DayOfWeek >Wednesday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[2].wednesday1[0]}</FirstLetter>{day_articles[2].wednesday1.slice(1)}</Par>
                        <TikTokPic src={TikTok} alt="Tik Tok screenshot"/>
                        <Par>{day_articles[2].wednesday2}</Par>
                        <Picture src={Empty} alt="Placeholder image"/>
                        <ButtonCont> 
                            <SwipeBtn value= "#Tuesday" onClick={(e)=>swipe(e)}><img alt="Back arrow" src={leftArr}/>TUESDAY</SwipeBtn> <SwipeBtn value= "#Thursday" onClick={(e)=>swipe(e)}>THURSDAY<img alt="Forward arrow" src={rightArr}/></SwipeBtn>
                        </ButtonCont> 
                <Vector src={Man}/>
        </div>
    )
}

export default Wednesday
