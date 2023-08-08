import React, {useRef, useState} from 'react';
import style from './Сontacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import bgImg1 from "../assets/img/contNew.jpg";
import {Title} from "../common/components/title/Title";
import {Bth} from "../common/components/bth/Bth";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

export const Contacts = () => {
    //const [formEl, setFormEl] = useState<HTMLFormElement | null>(null);
    const formEl = useRef(null);
    const bgImg = {
        backgroundImage: `url(${bgImg1})`,
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formEl.current)
        if (formEl.current) {
            const formData = new FormData(formEl.current);
            const data: { [key: string]: any } = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            axios
                //.post('http://localhost:3010/sendMessage', data)
                .post('https://vercel.com/yurik-00007/gmail-node-js/sendMessage', data)
                .then((res) => {
                    alert('Ваше сообщение отправлено');
                })
                .catch((error) => {
                    alert('Произошла ошибка при отправке сообщения');
                });
        }
    };

    return (
        <div id={'contacts'} className={style.contactsBlock} style={bgImg}>

            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contact Me'}/>

                <form id={'contactForm'}
                      className={style.contactsForm}
                      ref={formEl}
                      onSubmit={handleSubmit}
                >
                    <label className={style.contactsLabel}>NAME</label>
                    <input type={'text'} placeholder="Your name" name="name"/>
                    <label className={style.contactsLabel} >EMAIL</label>
                    <input type={'text'} placeholder="Your email" name="contacts"/>
                    <label className={style.contactsLabel} >MESSAGE</label>
                    <textarea placeholder="Please write what you want" name="message"/>
                    <button  type={"submit"}>Submit</button>
                    {/*<Bth type={'submit'} name={'SUBMIT'}/>*/}
                </form>
                <div className={style.contactsBig}>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                            <FontAwesomeIcon className={style.fontAwesomeIcon} icon={faHouse} size="sm"/>
                              Address</span>
                        <span className={style.contSmallSpan}> {`Russia,Moscow`}</span>
                    </div>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                             <FontAwesomeIcon className={style.fontAwesomeIcon} icon={faPhoneVolume} size="sm"/>
                            Lets Talk
                        </span>
                        <span className={style.contSmallSpan}>+7 9854304418</span>
                    </div>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                            <FontAwesomeIcon className={style.fontAwesomeIcon} icon={faEnvelope} size="sm"/>
                            Email
                        </span>
                        <span className={style.contSmallSpan}>yurik-007@mail.ru</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

