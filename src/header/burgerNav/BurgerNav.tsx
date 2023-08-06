import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";


export const BurgerNav = () => {
    const [menuIsOpen,setMenuIsOpen]=useState<boolean>(false);
    const onBurgerBtnClick=()=>{
        setMenuIsOpen(!menuIsOpen)
        console.log(menuIsOpen)
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen? `${style.burgerNavItems} ${style.show}`:style.burgerNavItems}>
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
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <div className={style.burgerDiv1}></div>
                <div className={style.burgerDiv2}></div>
                <div className={style.burgerDiv3}></div>
            </div>
        </div>
    );
}

