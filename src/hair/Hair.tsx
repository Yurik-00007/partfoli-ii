import React from 'react';
import style from './Hair.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import {Bth} from "../common/components/bth/Bth";


export const Hair = () => {
    return (
        <div id={'hire'} className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title text={'Открыт к сотрудничеству'}/>
                <Bth name={'Обсудить проект'} to={'contacts'}/>
            </div>
        </div>
    );
}

