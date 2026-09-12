import React from 'react';
import style from './Footer.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {socialLinks} from "./socialLinks";

export const SocialIcons = () => {
    return (
        <div className={style.socialIcons}>
            {socialLinks.map((item) => (
                <a
                    key={item.label}
                    className={style.socialIcon}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                >
                    <FontAwesomeIcon icon={item.icon} size="2xl" style={{color: "#ffffff"}}/>
                </a>
            ))}
        </div>
    );
}
