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
                        Frontend-разработчик
                    </h3>
                    <p className={style.mainText}>Окончивший обучение в IT-Incubator с последующей годовой стажировкой. В составе команды разрабатывал веб-приложение на <span className={style.tech}>Next.js</span> с использованием <span className={style.tech}>React</span>, <span className={style.tech}>TypeScript</span>, <span className={style.tech}>RTK Query</span>, <span className={style.tech}>GraphQL</span> и <span className={style.tech}>WebSocket</span>. Создавал адаптивные пользовательские интерфейсы, интегрировал <span className={style.tech}>REST API</span> и <span className={style.tech}>GraphQL</span>, реализовывал функциональность в реальном времени (чат, обновление данных без перезагрузки страницы). В процессе командной разработки по <span className={style.tech}>Scrum</span> брал задачи из <span className={style.tech}>Jira</span>, участвовал в спринтах, ежедневных созвонах, код-ревью и совместной разработке с использованием <span className={style.tech}>Git</span>.</p>

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

