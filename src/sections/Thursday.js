//imgs
import MatchLatte from '../images/MatchaLatte.png'
import vectors from '../images/Vectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
//articles
import {day_articles} from '../articles/articles.js'
//styling
import { DayOfWeek,Vector,Par,Picture, FirstLetter, Buttons, SwipeBtn, Arrow, ShowDay} from '../style.js';

const Thursday = ({current}) => {
    return (
        <ShowDay id="Thursday" current={current==="#Thursday"}>
            <DayOfWeek>Thursday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[3].thursday1[0]}</FirstLetter>{day_articles[3].thursday1.slice(1)}</Par>
                        <Picture src={MatchLatte} alt="Matcha Latte"/>
                        <Par>{day_articles[3].thursday2}</Par>
                        <Par>{day_articles[3].thursday3}</Par>
                        <Buttons> 
                            <a href="#Wednesday" ><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/>WEDNESDAY</SwipeBtn></a>
                            <a href="#Friday"><SwipeBtn >FRIDAY<Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></a>
                        </Buttons>  
            <Vector src={vectors}/>
        </ShowDay>
    )
}

export default Thursday
