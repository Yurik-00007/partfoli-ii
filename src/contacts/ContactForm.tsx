import React, {useRef, useState} from 'react';
import style from './Contacts.module.scss'
import {Button} from "../common/components/button/Button";
import axios from "axios";
import {MAIL_TO} from "../common/constants/contacts";

export const ContactForm = () => {
    const formEl = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

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
        <form className={style.contactsForm} ref={formEl} onSubmit={handleSubmit}>
            <label className={style.contactsLabel}>Имя</label>
            <input type={'text'} placeholder="Ваше имя" name="name" required/>
            <label className={style.contactsLabel}>Почта</label>
            <input type={'email'} placeholder="Ваш email" name="email" required/>
            <label className={style.contactsLabel}>Сообщение</label>
            <textarea placeholder="Напишите, о чём хотите поговорить" name="message" required/>
            <Button type={'submit'} name={isSending ? 'Отправка...' : 'Отправить'}/>
        </form>
    );
}
