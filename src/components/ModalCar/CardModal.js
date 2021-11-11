
import { Modal } from './Modal';
import styles from './CardModal.module.css';
import { Button } from '../Button/Button';
import CartContext from '../../source/cart-context';
import { useContext } from 'react/cjs/react.development';
import { ItemCard } from './ItemCard';

export const ModalCar = (props) => {
    const ctx = useContext(CartContext);

    const cartItemAddHandler = item => {
        return ctx.addItem({ ...item, amount: 1 });
    }

    const cartItemRemoveHandler = id => {
        return ctx.removeItem(id);
    }

    const totalAmount = `${ctx.totalAmount.toFixed(2)}`;
    const cartItems = (
        <ul>
            {ctx.items.map(item => (
                <ItemCard key={item.id} amount={item.amount} name={item.name} price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>);


    return (
        <Modal closeModal={props.closeModal}>
            {cartItems}
            <div className={styles.content_modal}>
                <div className={styles.total}>
                    <span></span>
                    <span><span>Total Amount: </span>{totalAmount}</span>
                </div>
                <div className={styles.actions}>
                    <Button title="Close" eventClick={props.closeModal} />
                    <Button title="Order" eventClick={props.closeModal} />
                </div>
            </div>
        </Modal>
    );
}