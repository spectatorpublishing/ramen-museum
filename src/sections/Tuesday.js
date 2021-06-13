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
                    <SBSLogoImg src="https://s3-alpha-sig.figma.com/img/bc56/e07b/f46e166c7aeb0aa87b7e4c776ee1bad9?Expires=1623628800&Signature=EbYyp-bniIGZfV9KGJPhKqXlLeciNVtyVY2vVGMNwbKo8Qwsfsei2hn1tqk40HEFg5A3S5s5-xVSbCPVJCdrDqnE3t6Lz2L5Pa5RBlAjSP5TfWZtFpJLZJrN4RtS1UKhlppgu93Qcs~ouPQqBwyJGPhwpRvPBfrUV4MSXQ4S0DUjsd~dqH~Ftu0~EGPuOEn7R~QUvz-pOyzfi~jfam61KoT~OznLSgUzTfOoa46pA2stB9pHvCg1c6AdsBBxlpOF2Bvf1LQTlwCgyf5YW8HGOlllsHAMmUk1QyGWUeiP0MRMkUqEdyyuwYixm9qkYRVUmdUl6RD6TlWrQ1Rl8Cj5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Spectator Brand Studios Logo" />
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
