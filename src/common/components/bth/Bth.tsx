import React from 'react';
import style from './Bth.module.scss';
import {Link} from "react-scroll";

export type BthPropsType={
    name:string
    bthType?: "submit"
    href?: string
    to?: string
}

export const Bth = (props:BthPropsType) => {
    if (props.to) {
        return (
            <Link
                to={props.to}
                className={style.projectBth}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
            >
                {props.name}
            </Link>
        );
    }

    if (props.href) {
        return (
            <a
                href={props.href}
                className={style.projectBth}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.name}
            </a>
        );
    }

    return (
        <button type={props.bthType} className={style.projectBth}>{props.name}</button>
    );
}