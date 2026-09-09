import React from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    icon: string
    items: readonly string[]
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.skillDivIcon}>
                <div className={style.skillDivIconBG}>
                    <img className={style.skillIcon} src={props.icon} alt=""/>
                </div>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <ul className={style.skillList}>
                {props.items.map((item) => (
                    <li key={item} className={style.skillItem}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
