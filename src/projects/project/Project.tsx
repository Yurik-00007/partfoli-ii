import React, {CSSProperties} from 'react';
import style from './Project.module.scss'
import {Button} from "../../common/components/button/Button";

type ProjectPropsType = {
    title: string
    image: string
    description: string
    href: string
}

export const Project = (props: ProjectPropsType) => {
    const imageStyle: CSSProperties = {
        backgroundImage: `url(${props.image})`,
    }

    return (
        <article className={style.project}>
            <div className={style.projectImg} style={imageStyle}>
                <Button name={'Смотреть'} href={props.href}/>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.projectDescription}>{props.description}</span>
        </article>
    );
}
