import React from 'react';
import style from './Skill.module.scss'

type SkillPropsTytle = {
    title: string
    icon: string
    description: string

}

function Skill(props: SkillPropsTytle) {
    return (
        <div className={style.skill}>
            <div className={style.skillDivIcon}>
                <div className={style.skillDivIconBG}>
                    <img className={style.skillIcon} src={props.icon} alt=""/>
                </div>
            </div>
            <h3 className={style.skillTitle}>{props.title}</h3>
            <span className={style.skillDescription}>{props.description}</span>
        </div>
    );
}

export default Skill;
