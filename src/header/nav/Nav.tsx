import React from 'react';
import style from './Nav.module.scss'
import { Link } from "react-scroll";


export const Nav=()=> {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                MAIN
            </Link>

            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                SKILLS
            </Link>

            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                PROJECTS
            </Link>

            <Link
                activeClass={style.active}
                to="hair"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                HIRE
            </Link>

            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >
                CONTACT
            </Link>
        </div>
    );
}

