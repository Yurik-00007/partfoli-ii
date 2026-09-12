import React from 'react';
import style from './Skills.module.scss'
import {Section} from "../common/components/section/Section";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {Skill} from "./skill/Skill";
import {skills, skillsIntro} from "./skillsData";

export const Skills = () => {
    return (
        <Section id={'skills'} className={style.skillsBlock} containerClassName={style.skillsContainer}>
            <Title text={'Навыки'}/>
            <p className={style.skillsText}>{skillsIntro}</p>
            <div className={style.skills}>
                <Fade cascade damping={0.3}>
                    {skills.map((skill) => (
                        <Skill
                            key={skill.title}
                            title={skill.title}
                            icon={skill.icon}
                            items={skill.items}
                        />
                    ))}
                </Fade>
            </div>
        </Section>
    );
}
