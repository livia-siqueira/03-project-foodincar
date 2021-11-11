
import dates from '../dates/foods.json';
import { ItemList } from './ItemList/ItemList';
import styles from './ListFoods.module.css';


export const ListFoods = () => {
    return (
        <div className={styles.list}>
            <ul>
            {dates.foods.map((food) => {
                return (<ItemList key={food.id} id={food.id} name={food.name} description={food.description} price={food.price}/>)
            })}
            </ul>
        </div>
    );
}