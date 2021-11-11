
import styles from './DescriptionFood.module.css';
export const DescriptionFood = (props) => {
    return (
        <div className={styles.itensLeft}>
            <h2>{props.name}</h2>
            <p className={styles.description}>{props.description}</p>
            <span className={styles.price}>R${props.price}</span>
        </div>
    );
}