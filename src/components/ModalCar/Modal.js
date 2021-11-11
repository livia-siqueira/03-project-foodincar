
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.closeModal}></div>
}

const ModalOverlay = (props) => {
    return <div className={styles.modal} >
        <div className={styles.content}>
        {props.children}
        </div>
    </div>
}

const portalModal = document.getElementById("modal");

export const Modal = props => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal}/>, portalModal )}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalModal)}
        </>

    );
}