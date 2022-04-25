import CartContext from "./cart-context";

import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalAmount = 
            state.totalAmount + action.item.price * action.item.amount; 

        // returns index of item in list if it exists
        const existingCartItemIndex = 
            state.items.findIndex(item => item.id === action.item.id);
        
        // reach out to state to get item out of array using index
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        // if the item type already exists in the cart
        if (existingCartItem) {
            // DO NOT add more items to the list, but increase the item's amount
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else  {
            //when an item is added for the first time to that cart items array
            // add whole new item to list
            updatedItems = state.items.concat(action.item);
        };
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "REMOVE") {
        // find index of existing itme if it exists in array
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            // remove item from array

        } else {
            // keep item in the cart

        }
    }

    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;