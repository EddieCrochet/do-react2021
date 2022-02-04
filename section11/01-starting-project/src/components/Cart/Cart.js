import classes from './Cart.module,css'

const Cart = props => {
    const cartItems = <ul>{[
        {id: 'c1', name: 'sushi', amount: 2, price: 12.99 },
].map((item) => <li>{item.name}</li>)}</ul>;
    
    return (
        <div>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>45.84</span>
            </div>
            <div></div>
        </div>
    )
};

export default Cart;