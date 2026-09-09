import React from 'react';
import style from './Nav.module.scss'
import { Link } from "react-scroll";

const HEADER_OFFSET = -90;

export const Nav=()=> {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                    offset={HEADER_OFFSET}
                duration={500}
            >
                Главная
            </Link>

            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                    offset={HEADER_OFFSET}
                duration={500}
            >
                Навыки
            </Link>

            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                    offset={HEADER_OFFSET}
                duration={500}
            >
                Проекты
            </Link>

            <Link
                activeClass={style.active}
                to="hire"
                spy={true}
                smooth={true}
                    offset={HEADER_OFFSET}
                duration={500}
            >
                Нанять
            </Link>

            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                    offset={HEADER_OFFSET}
                duration={500}
            >
                Контакты
            </Link>
        </div>
    );
}

