import React, {useRef} from 'react';
import style from './CertificatePreview.module.scss'
import certificateImg from '../assets/img/it-incubator-certificate.jpg'

export const CertificatePreview = () => {
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
        <>
            <button
                type="button"
                className={style.certificateThumb}
                onClick={openCertificate}
                onMouseEnter={openCertificate}
                aria-label="Открыть сертификат IT-Incubator"
            >
                <img src={certificateImg} alt="Сертификат об окончании стажировки IT-Incubator, Тимофеев Юрий"/>
            </button>

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
        </>
    );
}
