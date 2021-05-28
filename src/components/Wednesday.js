import {day_articles} from '../articles/articles.js';
import Empty from '../images/Empty.png'
import Man from '../images/manEating.png'
import TikTok from '../images/TikTok.png'
import { DayOfWeek,Vector,Par,Picture, FirstLetter } from '../style.js';

const Wednesday = () => {
    return (
        <div>
            <DayOfWeek>Wednesday</DayOfWeek>
                <Par><FirstLetter>{day_articles[2].wednesday1[0]}</FirstLetter>{day_articles[2].wednesday1.slice(1)}</Par>
                <Picture style={{width: '25vw'}} src={TikTok}/>
                <Par>{day_articles[2].wednesday2}</Par>
                <Picture src={Empty}/>
                <Vector src={Man}/>
        </div>
    )
}

export default Wednesday
