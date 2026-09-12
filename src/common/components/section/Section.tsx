import React, {CSSProperties, ReactNode} from 'react';
import styleContainer from '../../styles/Container.module.scss'

type SectionPropsType = {
    id?: string
    className: string
    containerClassName?: string
    children: ReactNode
    style?: CSSProperties
    as?: 'section' | 'footer' | 'header'
}

export const Section = (props: SectionPropsType) => {
    const Tag = props.as ?? 'section';

    return (
        <Tag id={props.id} className={props.className} style={props.style}>
            <div className={`${styleContainer.container} ${props.containerClassName ?? ''}`}>
                {props.children}
            </div>
        </Tag>
    );
}
