import React, {useRef} from 'react';
import style from './Hair.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import {Bth} from "../common/components/bth/Bth";
import certificateImg from '../assets/img/it-incubator-certificate.jpg'


export const Hair = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openCertificate = () => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    };

    const closeCertificate = () => {
        dialogRef.current?.close();
    };

    const onDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) {
            closeCertificate();
        }
    };

    return (
        <div id={'hire'} className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title text={'Открыт к сотрудничеству'}/>
                <button
                    type="button"
                    className={style.certificateThumb}
                    onClick={openCertificate}
                    onMouseEnter={openCertificate}
                    aria-label="Открыть сертификат IT-Incubator"
                >
                    <img src={certificateImg} alt="Сертификат об окончании стажировки IT-Incubator, Тимофеев Юрий"/>
                </button>
                <div className={style.hireButtons}>
                    <Bth name={'Обсудить проект'} to={'contacts'}/>
                    <Bth
                        name={'Скачать CV'}
                        href={`${process.env.PUBLIC_URL}/cv/Yuri-Timofeev-CV.pdf`}
                        download={'Yuri-Timofeev-CV.pdf'}
                    />
                </div>
            </div>

            <dialog
                ref={dialogRef}
                className={style.certificateDialog}
                onClick={onDialogClick}
                onCancel={closeCertificate}
            >
                <div
                    className={style.certificateDialogInner}
                    onMouseLeave={closeCertificate}
                >
                    <button
                        type="button"
                        className={style.certificateClose}
                        onClick={closeCertificate}
                        aria-label="Закрыть сертификат"
                    >
                        ×
                    </button>
                    <img src={certificateImg} alt="Сертификат об окончании стажировки IT-Incubator, Тимофеев Юрий"/>
                </div>
            </dialog>
        </div>
    );
}
