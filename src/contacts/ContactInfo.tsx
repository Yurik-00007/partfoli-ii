import React from 'react';
import style from './Contacts.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {ADDRESS, MAIL_TO, PHONE} from "../common/constants/contacts";

const details = [
    {icon: faHouse, title: 'Адрес', value: ADDRESS},
    {icon: faPhoneVolume, title: 'Телефон', value: PHONE},
    {icon: faEnvelope, title: 'Email', value: MAIL_TO},
]

export const ContactInfo = () => {
    return (
        <div className={style.contactsBig}>
            {details.map((item) => (
                <div key={item.title} className={style.contactsSmall}>
                    <span className={style.contBigSpan}>
                        <FontAwesomeIcon className={style.fontAwesomeIcon} icon={item.icon} size="sm"/>
                        {item.title}
                    </span>
                    <span className={style.contSmallSpan}>{item.value}</span>
                </div>
            ))}
        </div>
    );
}
