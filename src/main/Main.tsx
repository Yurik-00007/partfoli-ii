import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import mainImg from "../assets/img/typePhoto.png";
import {Fade} from "react-awesome-reveal";
import {ParticlesBg} from "../common/components/ParticlesBg/ParticlesBg";
import {Tilt} from 'react-tilt'

const tiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

export const Main = () => {
    return (
        <section id={'main'} className={style.mainBlock}>
            <ParticlesBg/>
            <Fade cascade damping={0.3}>
                <div className={`${styleContainer.container} ${style.mainContainer}`}>
                    <div className={style.mainTextBlock}>
                        <h3 className={style.mainTitle}>
                            Frontend-разработчик
                        </h3>
                        <p className={style.mainText}>Окончивший обучение в IT-Incubator с последующей годовой стажировкой. В составе команды разрабатывал веб-приложение на <span className={style.tech}>Next.js</span> с использованием <span className={style.tech}>React</span>, <span className={style.tech}>TypeScript</span>, <span className={style.tech}>RTK Query</span>, <span className={style.tech}>GraphQL</span> и <span className={style.tech}>WebSocket</span>. Создавал адаптивные пользовательские интерфейсы, интегрировал <span className={style.tech}>REST API</span> и <span className={style.tech}>GraphQL</span>, реализовывал функциональность в реальном времени (чат, обновление данных без перезагрузки страницы). В процессе командной разработки по <span className={style.tech}>Scrum</span> брал задачи из <span className={style.tech}>Jira</span>, участвовал в спринтах, ежедневных созвонах, код-ревью и совместной разработке с использованием <span className={style.tech}>Git</span>.</p>
                    </div>
                    <Tilt className={style.tilt} options={tiltOptions}>
                        <div
                            className={style.mainPhotoBlock}
                            style={{backgroundImage: `url(${mainImg})`}}
                        />
                    </Tilt>
                </div>
            </Fade>
        </section>
    );
}
