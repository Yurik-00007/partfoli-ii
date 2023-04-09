import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faVk,faGithub} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.socialIcons}>
                    <a className={style.socialIcon}>
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffffff",}} />
                    </a>
                    <a className={style.socialIcon}>
                        <FontAwesomeIcon icon={faTelegram} size="2xl" style={{color: "#ffffff",}} />                    </a>
                    <a className={style.socialIcon}>
                        <FontAwesomeIcon icon={faVk} size="2xl" style={{color: "#ffffff",}} />
                    </a>
                    <a className={style.socialIcon}>
                        <FontAwesomeIcon icon={faGithub} size="2xl" style={{color: "#ffffff",}} />
                    </a>
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

export default Footer;
