//imgs
import MatchLatte from '../images/MatchaLatte.png'
import vectors from '../images/vectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
//articles
import {day_articles} from '../articles/articles.js'
import Dropdown from './Dropdown';
//styling
import { DayOfWeek,Vector,Par,Picture, FirstLetter, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg, createMarkup} from '../style.js';

const Thursday = ({current}) => {
    return (
        <ShowDay id="Thursday" current={current==="#Thursday"}>
            <SBSLogo>
                <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                    <SBSLogoImg src="https://sbs-assets.s3.amazonaws.com/sbs-logo.png" alt="Spectator Brand Studios Logo" />
                </a>
                <Dropdown/>
            </SBSLogo>
            <DayOfWeek>Thursday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[3].thursday1[0]}</FirstLetter>{day_articles[3].thursday1.slice(1)}</Par>
                        <Picture src={MatchLatte} alt="Matcha Latte"/>
                        <Par>{day_articles[3].thursday2}</Par>
                        <Par dangerouslySetInnerHTML={createMarkup(day_articles[3].thursday3)} />
                        <Buttons> 
                            <BtnLink href="#Wednesday" ><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/>WEDNESDAY</SwipeBtn></BtnLink>
                            <BtnLink href="#Friday"><SwipeBtn >FRIDAY<Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></BtnLink>
                        </Buttons>  
            <Vector src={vectors}/>
        </ShowDay>
    )
}

export default Thursday
