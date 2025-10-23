import {useEffect, useCallback} from "react";
import {createPortal} from "react-dom";
import styles from './modal.module.css'


const Modal = ({isOpen, onClose, children}) => {
    const handleEscape = useCallback((e) => {
        if (e.key === "Escape") onClose();
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.modal__overlay}>
            <div
                className={styles.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;