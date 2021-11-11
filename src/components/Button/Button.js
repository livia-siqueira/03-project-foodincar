import styles from './Button.module.css';


export const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.eventClick}>
            {props.title}
            {props.type === 'Header' && ( <span className={styles.spanCar}>
                {props.valueCar}
            </span>)}
        </button>
    );
}