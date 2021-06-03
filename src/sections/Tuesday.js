import { DayOfWeek,Vector,Par,Picture, FirstLetter, ButtonCont, SwipeBtn, Arrow, swipe} from '../style.js';
import riverside from '../images/Riverside.png'
import ChelseaMarket from '../images/ChelseaMarket.png'
import {day_articles} from '../articles/articles.js';
import LanternDesign from '../images/LanternDesign.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'

const Tuesday = () => {
    return (
        <div id="Tuesday">
            <DayOfWeek>Tuesday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[1].tuesday1[0]}</FirstLetter>{day_articles[1].tuesday1.slice(1)}{day_articles[1].tuesday1}</Par>
                        <Picture src={riverside} alt="Riverside Park"/>
                        <Par>{day_articles[1].tuesday2}</Par>
                        <Par>{day_articles[1].tuesday3} </Par>
                        <Picture src={ChelseaMarket} alt="Chelsea Market"/>
                        <ButtonCont> 
                            <SwipeBtn value= "Monday" onClick={(e)=>swipe(e.target.value)}><Arrow alt="Back arrow" src={leftArr}/>MONDAY</SwipeBtn> 
                            <SwipeBtn value= "Wednesday" onClick={(e)=>swipe(e.target.value)}>WEDNESDAY <Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn>
                        </ButtonCont>  
                <Vector src={LanternDesign}/>
        </div>
    )
}

export default Tuesday
