

import image from '../../assets/meals.jpg';
import styles from './Image.module.css';

export const Image = () => {
    return <div className={styles.image }> <img src={image} alt="Foods in the table"></img>
    </div >
}