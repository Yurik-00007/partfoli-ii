import React from 'react';
import style from './Nav.module.scss'
import {NavLinks} from "./NavLinks";

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLinks activeClass={style.active}/>
        </nav>
    );
}
