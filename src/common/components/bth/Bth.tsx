import React from 'react';
import style from './Bth.module.scss';

export type BthPropsType={
    name:string
}

export const Bth = (props:BthPropsType) => {
    return (
                < >
                    <a className={style.projectBth}>{props.name}</a>
                </>
    );
}