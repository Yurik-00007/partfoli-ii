import React from 'react';
import style from './Nav.module.scss'

function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.navLink} href="">ABOUT</a>
            <a className={style.navLink} href="">SKILLS</a>
            <a className={style.navLink} href="">PROJECTS</a>
            <a className={style.navLink} href="">CONTACT</a>
            {/*
            <a className={style.navLink} href="">HIRE</a>
*/}
{/*
            <a className={style.navLink} href="">NET</a>
*/}
        </div>
    );
}

export default Nav;
