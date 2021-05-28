import { DayOfWeek,Vector,Par,Picture, FirstLetter } from '../style.js';
import riverside from '../images/Riverside.png'
import ChelseaMarket from '../images/ChelseaMarket.png'
import {day_articles} from '../articles/articles.js';
import LanternDesign from '../images/lanternDesign.png'

const Tuesday = () => {
    return (
        <div>
            <DayOfWeek>Tuesday</DayOfWeek>
                <Par><FirstLetter>{day_articles[1].tuesday1[0]}</FirstLetter>{day_articles[1].tuesday1.slice(1)}{day_articles[1].tuesday1}</Par>
                <Picture src={riverside}/>
                <Par>{day_articles[1].tuesday2}</Par>
                <Par>{day_articles[1].tuesday3} </Par>
                <Picture src={ChelseaMarket}/>
                <Vector src={LanternDesign}/>
        </div>
    )
}

export default Tuesday
