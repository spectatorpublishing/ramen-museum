//imgs
import riverside from '../images/Riverside.png'
import ChelseaMarket from '../images/ChelseaMarket.png'
import LanternDesign from '../images/lanternDesign.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
//articles
import {day_articles} from '../articles/articles.js';
import Dropdown from './Dropdown';
//styling
import { DayOfWeek,Vector,Par,Picture, FirstLetter, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg} from '../style.js';

const Tuesday = ({current}) => {
    return (
        <ShowDay id="Tuesday" current={current==="#Tuesday"}>
            <SBSLogo>
                <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                    <SBSLogoImg src="https://sbs-assets.s3.amazonaws.com/sbs-logo.png" alt="Spectator Brand Studios Logo" />
                </a>
                <Dropdown/>
            </SBSLogo>
            <DayOfWeek>Tuesday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[1].tuesday1[0]}</FirstLetter>{day_articles[1].tuesday1.slice(1)}</Par>
                        <Picture src={riverside} alt="Riverside Park"/>
                        <Par>{day_articles[1].tuesday2}</Par>
                        <Par>{day_articles[1].tuesday3} </Par>
                        <Picture src={ChelseaMarket} alt="Chelsea Market"/>
                        <Buttons> 
                            <BtnLink href="#Monday" ><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/>MONDAY</SwipeBtn></BtnLink>
                            <BtnLink href="#Wednesday"><SwipeBtn>WEDNESDAY <Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></BtnLink>
                        </Buttons>  
                <Vector src={LanternDesign}/>
        </ShowDay>
    )
}

export default Tuesday
