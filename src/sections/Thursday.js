import {day_articles} from '../articles/articles.js'
import MatchLatte from '../images/MatchaLatte.png'
import vectors from '../images/Vectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import { DayOfWeek,Vector,Par,Picture, FirstLetter, ButtonCont, SwipeBtn, Arrow, swipe} from '../style.js';

const Thursday = () => {
    return (
        <div id="Thursday">
            <DayOfWeek>Thursday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[3].thursday1[0]}</FirstLetter>{day_articles[3].thursday1.slice(1)}</Par>
                        <Picture src={MatchLatte} alt="Matcha Latte"/>
                        <Par>{day_articles[3].thursday2}</Par>
                        <ButtonCont> 
                            <SwipeBtn value= "Wednesday" onClick={(e)=>swipe(e.target.value)}><Arrow alt="Back arrow" src={leftArr}/>WEDNESDAY</SwipeBtn> 
                            <SwipeBtn value= "Friday" onClick={(e)=>swipe(e.target.value)}>FRIDAY<Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn>
                        </ButtonCont>  
            <Vector src={vectors}/>
        </div>
    )
}

export default Thursday
