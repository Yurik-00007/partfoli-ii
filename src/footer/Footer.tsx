import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faTelegram, faVk, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
    {
        href: 'https://t.me/yurik_0007',
        icon: faTelegram,
        label: 'Telegram',
    },
    {
        href: 'https://vk.ru/id47846562',
        icon: faVk,
        label: 'VK',
    },
    {
        href: 'https://www.linkedin.com/in/yurik-tim',
        icon: faLinkedin,
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/Yurik-00007',
        icon: faGithub,
        label: 'GitHub',
    },
]

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
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
                <h2 className={style.footerTitle}>Built with
                    <span className={style.socialHeart}>
                        <FontAwesomeIcon icon={faHeart} size="sm" style={{color: "#FEF44B",}}/>
                    </span>
                    in Moscow</h2>
                <h2 className={style.footerTitle}>©2023 Designed by Timofeev Yuri.</h2>
            </div>
        </div>
    );
}
