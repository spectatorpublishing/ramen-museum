import {day_articles} from '../articles/articles.js'
import MatchLatte from '../images/MatchaLatte.png'
import vectors from '../images/vectors.png'
import { DayOfWeek,Vector,Par,Picture } from '../style.js';

const Thursday = () => {
    return (
        <div>
            <DayOfWeek>Thursday</DayOfWeek>
                <Par>{day_articles[3].thursday1}</Par>
                <Picture src={MatchLatte}/>
                <Par>{day_articles[3].thursday2}</Par>
                <Vector src={vectors}/>
        </div>
    )
}

export default Thursday
