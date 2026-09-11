import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import todoImg from './../assets/img/todo-list.jpg'
import socialImg from './../assets/img/social-netwirk.jpg'
import instaImg from './../assets/img/insta-project.jpg'
import qrImg from './../assets/img/qr-project.svg'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {Project} from "./project/Project";


export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };
    const insta = {
        backgroundImage: `url(${instaImg})`,
    };
    const qr = {
        backgroundImage: `url(${qrImg})`,
    };

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Проекты'}/>
                <div className={style.projects}>
                    <Fade cascade damping={0.3}>
                        <Project
                            title={'Social network'}
                            style={social}
                            href={'https://yurik-00007.github.io/Samurai_way_all/#/'}
                            description={'Мой самый первый веб-проект — полноценная социальная сеть. Реализовал базовый функционал общения: регистрацию пользователей, профили, систему друзей, ленту новостей и обмен сообщениями.'}
                        />
                        <Project
                            title={'Todo list'}
                            style={todolist}
                            href={'https://yurik-00007.github.io/20-todolist-Finish_D_RTK/'}
                            description={'Удобная интерактивная записная книжка для управления повседневными задачами. Позволяет легко создавать, редактировать, удалять и отмечать выполненные дела, помогая организовывать рабочий день.'}
                        />
                        <Project
                            title={'InstaProject'}
                            style={insta}
                            href={'http://momenttify.ru/'}
                            description={'Аналог популярной социальной сети для обмена медиаконтентом. Проект с фокусом на работу с визуалом: публикация и кадрирование фотографий, лента постов, лайки, подписки и адаптивный интерфейс.'}
                        />
                        <Project
                            title={'QR-Scanner-Generator'}
                            style={qr}
                            href={'https://yurik-00007.github.io/qr-code/'}
                            description={'Инструмент для работы с QR-кодами, объединяющий генерацию новых кодов и сканирование существующих с помощью камеры устройства. Проект демонстрирует работу с аппаратными API и обработку данных в реальном времени.'}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
}
