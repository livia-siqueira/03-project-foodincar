
import { useReducer } from 'react';
import { act } from 'react-dom/test-utils';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )

    const existingCart = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if(existingCart) {
      updatedItem = {
        ...existingCart,
        amount: existingCart.amount + action.item.amount
      }
      console.log(action.item.amount)
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

    }
    else{
      updatedItem = {...state.item};
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if(action.type === 'REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const hasItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - hasItem.price
    let updatedItems;

    if(hasItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    }
    else{
      const updatedItem = {
        ...hasItem, 
        amount: hasItem.amount - 1
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;