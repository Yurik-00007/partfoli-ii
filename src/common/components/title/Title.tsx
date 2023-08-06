import React from 'react';
import style from './Title.module.scss';

export type TitlePropsType = {
    text: string
}

export const Title = (props: TitlePropsType) => {
    return (
        < >
            <h3 className={(props.text === 'Contact Me')
                ? style.genTitleWhite : style.genTitle}>{props.text}</h3>
        </>
    );

}