//imgs
import Empty from '../images/Empty.png'
import Man from '../images/manEating.png'
import TikTok from '../images/TikTok.png'
import leftArr from '../images/LeftArrow.png'
import rightArr from '../images/RightArrow.png'
import styled from 'styled-components'
//articles
import {day_articles} from '../articles/articles.js';
import Dropdown from './Dropdown';
//styling
import { DayOfWeek,Vector,Picture, FirstLetter,Par, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg} from '../style.js';

const TikTokPic=styled.img`
    display:block;
    margin:auto;
    padding:2vw;
    width:25vw;
    @media only screen and (max-width: 768px) {
        width:40vw;
    }
`

const Wednesday = ({current}) => {
    return (
        <ShowDay id="Wednesday" current={current==="#Wednesday"}>
            <SBSLogo>
                <a href="https://www.columbiaspectator.com/sponsored-content/" target="_blank" rel="noreferrer">
                    <SBSLogoImg src="https://s3-alpha-sig.figma.com/img/bc56/e07b/f46e166c7aeb0aa87b7e4c776ee1bad9?Expires=1623628800&Signature=EbYyp-bniIGZfV9KGJPhKqXlLeciNVtyVY2vVGMNwbKo8Qwsfsei2hn1tqk40HEFg5A3S5s5-xVSbCPVJCdrDqnE3t6Lz2L5Pa5RBlAjSP5TfWZtFpJLZJrN4RtS1UKhlppgu93Qcs~ouPQqBwyJGPhwpRvPBfrUV4MSXQ4S0DUjsd~dqH~Ftu0~EGPuOEn7R~QUvz-pOyzfi~jfam61KoT~OznLSgUzTfOoa46pA2stB9pHvCg1c6AdsBBxlpOF2Bvf1LQTlwCgyf5YW8HGOlllsHAMmUk1QyGWUeiP0MRMkUqEdyyuwYixm9qkYRVUmdUl6RD6TlWrQ1Rl8Cj5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Spectator Brand Studios Logo" />
                </a>
                <Dropdown/>
            </SBSLogo>
            <DayOfWeek>Wednesday</DayOfWeek>
                        <Par><FirstLetter>{day_articles[2].wednesday1[0]}</FirstLetter>{day_articles[2].wednesday1.slice(1)}</Par>
                        <TikTokPic src={TikTok} alt="Tik Tok screenshot"/>
                        <Par>{day_articles[2].wednesday2}</Par>
                        <Picture src={Empty} alt="Placeholder image"/>
                        <Buttons> 
                            <BtnLink href="#Tuesday"><SwipeBtn><Arrow alt="Back arrow" src={leftArr}/>TUESDAY</SwipeBtn></BtnLink>
                            <BtnLink href="#Thursday"><SwipeBtn>THURSDAY<Arrow alt="Forward arrow" src={rightArr}/></SwipeBtn></BtnLink>
                        </Buttons> 
                <Vector src={Man}/>
        </ShowDay>
    )
}

export default Wednesday
