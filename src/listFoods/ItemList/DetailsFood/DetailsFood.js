import styles from './DetailsFood.module.css';
import { Button } from '../../../components/Button/Button';
import CartContext from '../../../source/cart-context';
import { useContext, useState } from 'react';
import Input from '../Input/Input';
import { useRef } from 'react';

export const DetailsFood = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountUseRef = useRef(0);


    const ctx = useContext(CartContext);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountUseRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
           setAmountIsValid(false);
           return;
        }
        props.onAddToCart(enteredAmountNumber);
    }


    return (
        <div className={styles.itensRigth}>
            <div className={styles.localPrice}>
                <Input
                    ref={amountUseRef}
                    label='Amount'
                    controlInput={{
                        id: props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                    }}
                />
            </div>
            <Button title="+Add" type="List" eventClick={submitHandler} />
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </div>
    );
}


