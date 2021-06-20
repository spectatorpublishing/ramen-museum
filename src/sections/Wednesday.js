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
import { DayOfWeek,SVG,Picture, FirstLetter,Par, Buttons, SwipeBtn, Arrow, ShowDay, BtnLink, SBSLogo, SBSLogoImg} from '../style.js';

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
                    <SBSLogoImg src="https://sbs-assets.s3.amazonaws.com/sbs-logo.png" alt="Spectator Brand Studios Logo" />
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
                        <SVG width="1450" height="247" viewBox="0 0 1410 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-23 104.376C-2.55307 119.648 76.2328 190.229 195.098 153.575C343.679 107.758 389.134 66.3756 552.028 57.917C714.922 49.4585 851.335 118.826 1016.96 104.376C1149.45 92.8156 1339.54 27.1407 1447 2" stroke="#872720" stroke-width="4"/>
                            <path d="M-23 142.376C-2.55307 157.648 76.2328 228.229 195.098 191.575C343.679 145.758 389.134 104.376 552.028 95.917C714.922 87.4585 851.335 156.826 1016.96 142.376C1149.45 130.816 1339.54 65.1407 1447 40" stroke="#872720" stroke-width="4"/>
                            <path d="M-23 185.376C-2.55307 200.648 76.2328 271.229 195.098 234.575C343.679 188.758 389.134 147.376 552.028 138.917C714.922 130.459 851.335 199.826 1016.96 185.376C1149.45 173.816 1339.54 108.141 1447 83" stroke="#872720" stroke-width="4"/>
                        </SVG>
        </ShowDay>
    )
}

export default Wednesday
