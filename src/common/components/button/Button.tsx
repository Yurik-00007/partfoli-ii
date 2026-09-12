import React from 'react';
import style from './Button.module.scss';
import {Link} from "react-scroll";
import {SCROLL_OFFSET} from "../../constants/nav";

export type ButtonPropsType = {
    name: string
    type?: "submit"
    href?: string
    to?: string
    download?: string
}

export const Button = (props: ButtonPropsType) => {
    if (props.to) {
        return (
            <Link
                to={props.to}
                className={style.button}
                spy={true}
                smooth={true}
                offset={SCROLL_OFFSET}
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
                className={style.button}
                {...(props.download
                    ? {download: props.download}
                    : {target: '_blank', rel: 'noopener noreferrer'})}
            >
                {props.name}
            </a>
        );
    }

    return (
        <button type={props.type} className={style.button}>{props.name}</button>
    );
}
