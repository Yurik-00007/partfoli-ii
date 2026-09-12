import React from 'react';
import style from './Title.module.scss';

export type TitlePropsType = {
    text: string
    light?: boolean
    className?: string
}

export const Title = (props: TitlePropsType) => {
    const className = [
        props.light ? style.genTitleWhite : style.genTitle,
        props.className,
    ].filter(Boolean).join(' ');

    return (
        <h3 className={className}>
            {props.text}
        </h3>
    );
}
