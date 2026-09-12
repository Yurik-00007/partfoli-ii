import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {NavLinks} from "../nav/NavLinks";

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const closeMenu = () => setMenuIsOpen(false);

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <NavLinks activeClass={style.active} onClick={closeMenu}/>
            </div>
            <button
                type="button"
                className={style.burgerBtn}
                onClick={() => setMenuIsOpen((open) => !open)}
                aria-label={menuIsOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
                <span className={style.burgerDiv1}></span>
                <span className={style.burgerDiv2}></span>
                <span className={style.burgerDiv3}></span>
            </button>
        </div>
    );
}
