import React from 'react';
import style from './Contacts.module.scss'
import bgImg from "../assets/img/contNew.jpg";
import {Section} from "../common/components/section/Section";
import {Title} from "../common/components/title/Title";
import {ContactForm} from "./ContactForm";
import {ContactInfo} from "./ContactInfo";

export const Contacts = () => {
    return (
        <Section
            id={'contacts'}
            className={style.contactsBlock}
            containerClassName={style.contactsContainer}
            style={{backgroundImage: `url(${bgImg})`}}
        >
            <Title text={'Контакты'} light/>
            <ContactForm/>
            <ContactInfo/>
        </Section>
    );
}
