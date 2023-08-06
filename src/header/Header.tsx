import React from 'react';
import style from './Header.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";


export const Header = () => {
    return (
        <div className={style.headerBlock}>
            <div className={` ${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    );
}

