import {day_articles} from '../articles/articles.js';
import vectors from '../images/vectors.png'
import { DayOfWeek, Vector,Par} from '../style.js';

import React from 'react'

const Monday = () => {
    return (
        <div>
            <DayOfWeek>Monday</DayOfWeek>
                <Par>{day_articles[0].monday1}</Par>
                <Par>{day_articles[0].monday2}</Par>
                <Par>{day_articles[0].monday3}</Par>
                <Vector src={vectors}/>
        </div>
    )
}

export default Monday
