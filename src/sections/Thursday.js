//imgs
import MatchLatte from '../images/MatchaLatte.png'
import vectors from '../images/vectors.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
//articles
import {day_articles} from '../articles/articles.js'
import Dropdown from './Dropdown';
//styling
import { DayOfWeek,Vector,Par,Picture, FirstLetter, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg} from '../style.js';

const Thursday = ({current}) => {
    return (
        <ShowDay id="Thursday" current={current==="#Thursday"}>
            <SBSLogo>
                <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                    <SBSLogoImg src="https://s3-alpha-sig.figma.com/img/bc56/e07b/f46e166c7aeb0aa87b7e4c776ee1bad9?Expires=1623628800&Signature=EbYyp-bniIGZfV9KGJPhKqXlLeciNVtyVY2vVGMNwbKo8Qwsfsei2hn1tqk40HEFg5A3S5s5-xVSbCPVJCdrDqnE3t6Lz2L5Pa5RBlAjSP5TfWZtFpJLZJrN4RtS1UKhlppgu93Qcs~ouPQqBwyJGPhwpRvPBfrUV4MSXQ4S0DUjsd~dqH~Ftu0~EGPuOEn7R~QUvz-pOyzfi~jfam61KoT~OznLSgUzTfOoa46pA2stB9pHvCg1c6AdsBBxlpOF2Bvf1LQTlwCgyf5YW8HGOlllsHAMmUk1QyGWUeiP0MRMkUqEdyyuwYixm9qkYRVUmdUl6RD6TlWrQ1Rl8Cj5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Spectator Brand Studios Logo" />
                </a>
                <Dropdown/>
            </SBSLogo>
            <DayOfWeek>Thursday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[3].thursday1[0]}</FirstLetter>{day_articles[3].thursday1.slice(1)}</Par>
                        <Picture src={MatchLatte} alt="Matcha Latte"/>
                        <Par>{day_articles[3].thursday2}</Par>
                        <Par>{day_articles[3].thursday3}</Par>
                        <Buttons> 
                            <BtnLink href="#Wednesday" ><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/>WEDNESDAY</SwipeBtn></BtnLink>
                            <BtnLink href="#Friday"><SwipeBtn >FRIDAY<Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></BtnLink>
                        </Buttons>  
            <Vector src={vectors}/>
        </ShowDay>
    )
}

export default Thursday
