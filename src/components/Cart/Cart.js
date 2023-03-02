import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext);

//   const groupedItems = cartCtx.items.reduce((acc, item) => {
//     const existingItemIndex = acc.findIndex((groupedItem) => groupedItem.id === item.id);
//     if (existingItemIndex !== -1) {
//       acc[existingItemIndex].price += item.price;
//     } else {
//       acc.push({ id: item.id, name: item.name, price: item.price });
//     }
//     return acc;
//   }, []);
  
  const cartItems = (
    <ul className={classes['cart-items']}>
      {groupedItems.map((item) => (
        <li key={item.id}>
          <div>{item.name}</div>
          <div>${item.price.toFixed(2)}</div>
          <button>+</button>  <button>-</button>
        </li>
      ))}
    </ul>
  );

  const totalAmount = groupedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
