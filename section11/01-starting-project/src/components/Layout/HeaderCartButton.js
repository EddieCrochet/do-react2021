import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

import { useContext } from 'react';
import cartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(cartContext);

    const numberOfItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onCluck}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    ) 
}

export default HeaderCartButton;