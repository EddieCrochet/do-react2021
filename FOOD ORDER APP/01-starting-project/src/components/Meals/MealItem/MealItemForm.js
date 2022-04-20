import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';


const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        /*
        form needs valid input and therefore must get past this
        if statement check to be valid!
    */
        if(enteredAmount.trim().length === 0 || 
        enteredAmountNumber < 1 || 
        enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id: "amount_" + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1', 
                    defaultValue: '1',
                }} 
            />
            <button>+ Add</button>
            {/*

            conditionally rendering content to the DOM based on
            a boolean below.

             */}
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;