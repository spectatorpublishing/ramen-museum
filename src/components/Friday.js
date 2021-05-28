import {day_articles} from '../articles/articles.js';
import vectors from '../images/vectors.png'
import Empty from '../images/Empty.png'
import Ramen from '../images/Ramen.png'
import Food from '../images/Food.png'
import { DayOfWeek,Vector,Par,Picture, SideBySide, FirstLetter } from '../style.js';

const Friday = () => {
    return (
        <div>
            <DayOfWeek>Friday</DayOfWeek>
            <SideBySide>
                <div style={{display: 'flex', flexDirection:'column', width:'50%'}}>
                    <Par style={{width:'100%'}}><FirstLetter>{day_articles[4].friday1[0]}</FirstLetter>{day_articles[4].friday1.slice(1)}</Par>
                    <Par style={{width:'100%'}}>{day_articles[4].friday2}</Par>
                </div>
                <div style={{width:'40%'}}>
                    <Picture style={{width: '100%',}} src={Food}/>
                </div>
            </SideBySide>
                <Par>{day_articles[4].friday3}</Par>
                <Picture src={Empty}/>
                <Par>{day_articles[4].friday4}</Par>
                <Picture src={Ramen}/>
                <Par>{day_articles[4].friday5}</Par>
                <Vector src={vectors}/>
        </div>
    )
}

export default Friday
