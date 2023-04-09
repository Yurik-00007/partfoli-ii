import React from 'react';
import style from './Сontacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import bgImg1 from "../assets/img/contNew.jpg";
import {Title} from "../common/components/title/Title";
import {Bth} from "../common/components/bth/Bth";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faPhoneVolume,faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contacts() {
    const bgImg = {
        backgroundImage: `url(${bgImg1})`,
    }
    return (
        <div className={style.contactsBlock} style={bgImg}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contact Me'}/>
                <form className={style.contactsForm}>
                    <label className={style.contactsLabel}>NAME</label>
                    <input type={'text'}/>
                    <label className={style.contactsLabel}>EMAIL</label>
                    <input type={'text'}/>
                    <label className={style.contactsLabel}>MESSAGE</label>
                    <textarea/>
                    <Bth name={'SUBMIT'}/>
                </form>
                <div className={style.contactsBig}>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                            <FontAwesomeIcon icon={faHouse} size="sm"/>
                            Address</span>
                        <span className={style.contSmallSpan}> {`Russia,Moscow`}</span>
                    </div>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                             <FontAwesomeIcon icon={faPhoneVolume} size="sm"/>
                            Lets Talk
                        </span>
                        <span className={style.contSmallSpan}>+7 9854304418</span>
                    </div>
                    <div className={style.contactsSmall}>
                        <span className={style.contBigSpan}>
                            <FontAwesomeIcon icon={faEnvelope} size="sm" />
                            Email
                        </span>
                        <span className={style.contSmallSpan}>yurik-007@mail.ru</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contacts;
