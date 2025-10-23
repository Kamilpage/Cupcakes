import React from 'react';
import {createPortal} from "react-dom";
import styles from './modal.module.css';
const Modal = ({children}) => {
    return createPortal (
        <div className={styles.modal}>
            <div className={styles.modal__background}>
                <div className={styles.modal__content}>
                {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;