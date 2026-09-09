import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import icon1 from "../assets/img/icon_3.svg";
import icon2 from "../assets/img/icon_2.svg";
import icon3 from "../assets/img/icon_1.svg";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {Skill} from "./skill/Skill";


export const Skills = () => {


    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h3 className={style.skillsTitle}>Навыки</h3>*/}
                <Title text={'Навыки'}/>
                <p className={style.skillsText}>Стек и процессы, с которыми работал в команде: интерфейсы на React и Next.js, передача данных через REST, GraphQL и WebSocket, работа по Scrum от задачи в Jira до код-ревью, CI/CD и деплоя.</p>
                <div className={style.skills}>
                    <Fade cascade damping={0.3}>

                        <Skill
                            title={'Frontend Development'}
                            icon={icon1}
                            items={[
                                'React',
                                'Next.js',
                                'TypeScript',
                                'JavaScript (ES6+)',
                                'HTML5',
                                'CSS3/SCSS',
                                'Tailwind',
                            ]}
                        />
                        <Skill
                            title={'State & Data'}
                            icon={icon2}
                            items={[
                                'Redux Toolkit',
                                'RTK Query',
                                'Context API',
                                'REST API',
                                'GraphQL',
                                'WebSocket',
                            ]}
                        />
                        <Skill
                            title={'Tools & Workflow'}
                            icon={icon3}
                            items={[
                                'Git',
                                'GitHub',
                                'Webstorm/VS Code',
                                'Jira',
                                'Scrum',
                                'CI/CD (Vercel)',
                                'Figma',
                            ]}
                        />
                    </Fade>

                </div>
            </div>
        </div>
    );
}

export default Skills;
