import React from 'react';
import style from './Footer.module.scss'
import {Section} from "../common/components/section/Section";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {SocialIcons} from "./SocialIcons";

export const Footer = () => {
    return (
        <Section as={'footer'} className={style.footerBlock} containerClassName={style.footerContainer}>
            <SocialIcons/>
            <h2 className={style.footerTitle}>Built with
                <span className={style.socialHeart}>
                    <FontAwesomeIcon icon={faHeart} size="sm" style={{color: "#FEF44B"}}/>
                </span>
                in Moscow</h2>
            <h2 className={style.footerTitle}>©2023 Designed by Timofeev Yuri.</h2>
        </Section>
    );
}
