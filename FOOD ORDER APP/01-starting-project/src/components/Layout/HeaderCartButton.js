import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

import { useContext, useEffect, useState } from 'react';
import cartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(cartContext);

    const { items } = cartCtx;

    const numberOfItems = items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);


    // I only want to add the 'bump' class effect if the button is highlighted
    const btnClasses = 
        `${classes.button} ${ btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        // the button is not highlighted until AFTER the component is rendered
        // and if there are anyh amount of items in the cart
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            // remove the animation class from button since it only 
                // executes once when added
            setBtnIsHighlighted(false);
            // 300 ms because that is how long our css animation lasts for
        }, 300);

        // returning a function in useEffect automatically 
            // returns clean up function
        return () => {
            clearTimeout(timer);
        }   
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onCluck}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    ) 
}

export default HeaderCartButton;