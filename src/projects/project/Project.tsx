import React from 'react';
import style from './Project.module.scss'
import {Bth} from "../../common/components/bth/Bth";

type ProjectPropsType ={
    title:string
    style:{}
    description:string

}

export const Project=(props:ProjectPropsType)=> {
    return (
        <div className={style.project}>

            <div className={style.projectImg} style={props.style}>
{/*
            <a className={style.projectBth}>Смотреть</a>
*/}
                <Bth name={'VIEW'}/>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.projectDescription}>{props.description}</span>
        </div>
    );
}

