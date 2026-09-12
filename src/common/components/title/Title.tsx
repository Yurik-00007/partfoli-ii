import React from 'react';
import style from './Title.module.scss';

export type TitlePropsType = {
    text: string
    light?: boolean
}

export const Title = (props: TitlePropsType) => {
    return (
        <h3 className={props.light ? style.genTitleWhite : style.genTitle}>
            {props.text}
        </h3>
    );
}
