import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import mainImg from "../assets/img/typePhoto.png";
import {Fade} from "react-awesome-reveal";
import {ParticlesBg} from "../common/components/ParticlesBg/ParticlesBg";
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Main=() =>{
    const mainPhoto={
        backgroundImage: `url(${mainImg})`,
    }


    return (
        <div id={'main'} className={style.mainBlock}>
<ParticlesBg/>
            <Fade cascade damping={0.3} >
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.mainTextBlock}>

                    <h3 className={style.mainTitle}>
                        Hello Everybody!
                    </h3>
                    <p className={style.mainText}>I’m a UI/UX Designer, Front End Developer & Traveler. I’m from Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam scelerisque consectetur arcu eu lacinia. Vivamus sem sem,
                        ornare in nibh et, fermentum luctus metus.</p>

                </div>
                <Tilt className={style.tilt} options={defaultOptions} >
                <div className={style.mainPhotoBlock} style={mainPhoto}>
                    {/*<img className={style.mainPhoto} src={photo} alt=""/>*/}
                </div>
                </Tilt>
            </div>
            </Fade>
        </div>
    );
}

