
import styles from './ItemList.module.css';
import { DescriptionFood } from './DescriptionFood/DescriptionFood';
import { DetailsFood } from './DetailsFood/DetailsFood';
import { useContext } from 'react';
import CartContext from '../../source/cart-context';


export const ItemList = (props) => {
    
    const ctx = useContext(CartContext);
    
    const addToCartHandler = amount  => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    
    return (
        <li className={styles.li}>
           <DescriptionFood name={props.name} id={props.id} price={props.price} description={props.description}/>
           <DetailsFood onAddToCart={addToCartHandler} name={props.name} id={props.id} price={props.price}/>
        </li>

    );
}