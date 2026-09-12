import React from 'react';
import {Link} from "react-scroll";
import {navItems, SCROLL_OFFSET} from "../../common/constants/nav";

type NavLinksPropsType = {
    activeClass: string
    onClick?: () => void
}

export const NavLinks = (props: NavLinksPropsType) => {
    return (
        <>
            {navItems.map((item) => (
                <Link
                    key={item.to}
                    activeClass={props.activeClass}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={SCROLL_OFFSET}
                    duration={500}
                    onClick={props.onClick}
                >
                    {item.label}
                </Link>
            ))}
        </>
    );
}
