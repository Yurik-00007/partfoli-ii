import React, {useRef, useState} from 'react';
import style from './Сontacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import bgImg1 from "../assets/img/contNew.jpg";
import {Title} from "../common/components/title/Title";
import {Bth} from "../common/components/bth/Bth";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const MAIL_TO = 'yurik-007@mail.ru';

export const Contacts = () => {
    const formEl = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const bgImg = {
        backgroundImage: `url(${bgImg1})`,
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formEl.current || isSending) {
            return;
        }

        const formData = new FormData(formEl.current);
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!name || !email || !message) {
            alert('Заполните имя, почту и сообщение');
            return;
        }

        setIsSending(true);

        axios
            .post(`https://formsubmit.co/ajax/${MAIL_TO}`, {
                name,
                email,
                message,
                _subject: `Портфолио: сообщение от ${name}`,
                _template: 'table',
                _captcha: 'false',
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })
            .then(() => {
                alert('Сообщение отправлено на почту');
                formEl.current?.reset();
            })
            .catch(() => {
                alert('Не получилось отправить. Напишите напрямую: ' + MAIL_TO);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div id={'contacts'} className={style.contactsBlock} style={bgImg}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Контакты'}/>

                <form id={'contactForm'}
                      className={style.contactsForm}
                      ref={formEl}
                      onSubmit={handleSubmit}
                >
                    <label className={style.contactsLabel}>Имя</label>
                    <input type={'text'} placeholder="Ваше имя" name="name" required/>
                    <label className={style.contactsLabel}>Почта</label>
                    <input type={'email'} placeholder="Ваш email" name="email" required/>
                    <label className={style.contactsLabel}>Сообщение</label>
                    <textarea placeholder="Напишите, о чём хотите поговорить" name="message" required/>
                    <Bth bthType={'submit'} name={isSending ? 'Отправка...' : 'Отправить'}/>
                </form>
                <div className={style.contactsBig}>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                            <FontAwesomeIcon className={style.fontAwesomeIcon} icon={faHouse} size="sm"/>
                              Адрес</span>
                        <span className={style.contSmallSpan}> {`Россия, Москва`}</span>
                    </div>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                             <FontAwesomeIcon className={style.fontAwesomeIcon} icon={faPhoneVolume} size="sm"/>
                            Телефон
                        </span>
                        <span className={style.contSmallSpan}>+7 9854304418</span>
                    </div>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                            <FontAwesomeIcon className={style.fontAwesomeIcon} icon={faEnvelope} size="sm"/>
                            Email
                        </span>
                        <span className={style.contSmallSpan}>{MAIL_TO}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
