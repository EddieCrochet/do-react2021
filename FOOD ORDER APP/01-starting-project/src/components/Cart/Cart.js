import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import cartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(cartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => 
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />)}
        </ul>;
    
    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']} 
                    onClick={props.onHideCart}>
                        Close
                </button>

                {/*only render the order button if hasItems returns true
                ------ if there are items in the cart!*/}
                {hasItems && <button className={classes.button}>order</button>}
            </div>
        </Modal>
    )
};

export default Cart;