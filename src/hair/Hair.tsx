import React from 'react';
import style from './Hair.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import {Bth} from "../common/components/bth/Bth";


export const Hair = () => {
    return (
        <div id={'hair'} className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title text={'Remote Work'}/>
                <Bth name={'CLICK ME'}/>
            </div>
        </div>
    );
}

