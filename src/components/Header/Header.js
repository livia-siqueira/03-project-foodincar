
import styles from './Header.module.css';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { useContext } from 'react';
import CartContext from '../../source/cart-context';



export const Header = (props) => {
    const ctx = useContext(CartContext);

    const qtdItensCar = ctx.items.reduce((ac, at) => {
        console.log((at))
        return ac + at.amount;
    }, 0);


    return (
        <>
        <header>
            <div className={styles.header}>
            <h1>ReactMeals</h1>
            <Button title="YourCart" valueCar = {qtdItensCar} type='Header' eventClick={props.onModal}/> 
            </div>
        </header>
         <Image/>
     </>
    );
}