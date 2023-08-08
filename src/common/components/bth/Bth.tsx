import React from 'react';
import style from './Bth.module.scss';

export type BthPropsType={
    name:string
    bthType?: "submit"
}

export const Bth = (props:BthPropsType) => {
    return (
                    <button type={props.bthType} className={style.projectBth}>{props.name}</button>
    );
}