import { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import Input from '../../listFoods/ItemList/Input/Input';
import CartContext from '../../source/cart-context';
import { Button } from '../Button/Button';
import styles from './ItemCard.module.css';

export const ItemCard = (props) => {

    const ctx = useContext(CartContext);

    const [itemsFood, setItemsFood] = useState(props.amount);
    const hasItem = ctx.items.length > 0;


    return (
        <li className={styles.li}>
            <div className={styles.items_left}>
                <p>{props.name}</p>
                <div className={styles.control_items}>
                    <span className={styles.price}>R${props.price}</span>
                    <span className={styles.qtdFoods}>x{props.amount}</span>
                </div>
            </div>
            <div className={styles.items_rigth}>
                <button className={styles.button} onClick={props.onRemove}>-</button>
                <button className={styles.button} onClick={props.onAdd}>+</button>
            </div>
        </li>

    );
}