import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";


export const BurgerNav = () => {
    const [menuIsOpen,setMenuIsOpen]=useState<boolean>(false);
    const onBurgerBtnClick=()=>{
        setMenuIsOpen(!menuIsOpen)
    }
    const closeMenu=()=>{
        setMenuIsOpen(false)
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen? `${style.burgerNavItems} ${style.show}`:style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={closeMenu}
                >
                    Главная
                </Link>

                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={closeMenu}
                >
                    Навыки
                </Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={closeMenu}
                >
                    Проекты
                </Link>
                <Link
                    activeClass={style.active}
                    to="hire"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={closeMenu}
                >
                    Нанять
                </Link>

                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={closeMenu}
                >
                    Контакты
                </Link>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <div className={style.burgerDiv1}></div>
                <div className={style.burgerDiv2}></div>
                <div className={style.burgerDiv3}></div>
            </div>
        </div>
    );
}

