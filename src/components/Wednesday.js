import {day_articles} from '../articles/articles.js';
import Empty from '../images/Empty.png'
import Man from '../images/manEating.png'
import TikTok from '../images/TikTok.png'
import { DayOfWeek,Vector,Par,Picture } from '../style.js';

const Wednesday = () => {
    return (
        <div>
            <DayOfWeek>Wednesday</DayOfWeek>
                <Par>{day_articles[2].wednesday1}</Par>
                <Picture style={{width: '25vw'}} src={TikTok}/>
                <Par>{day_articles[2].wednesday2}</Par>
                <Picture src={Empty}/>
                <Vector src={Man}/>
        </div>
    )
}

export default Wednesday
