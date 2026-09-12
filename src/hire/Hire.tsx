import React from 'react';
import style from './Hire.module.scss'
import {Section} from "../common/components/section/Section";
import {Title} from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {CertificatePreview} from "./CertificatePreview";

export const Hire = () => {
    return (
        <Section id={'hire'} className={style.hireBlock} containerClassName={style.hireContainer}>
            <Title text={'Открыт к сотрудничеству'} className={style.hireTitle}/>
            <CertificatePreview/>
            <div className={style.hireButtons}>
                <Button name={'Обсудить проект'} to={'contacts'}/>
                <Button
                    name={'Скачать CV'}
                    href={`${process.env.PUBLIC_URL}/cv/Yuri-Timofeev-CV.pdf`}
                    download={'Yuri-Timofeev-CV.pdf'}
                />
            </div>
        </Section>
    );
}
