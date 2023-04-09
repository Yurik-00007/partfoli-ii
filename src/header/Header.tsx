import React from 'react';
import style from './Header.module.scss'
import Nav from "../nav/Nav";
import styleContainer from '../common/styles/Container.module.scss'


function Header() {
    return (
        <div className={style.headerBlock}>
            <div className={` ${styleContainer.container} ${style.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
