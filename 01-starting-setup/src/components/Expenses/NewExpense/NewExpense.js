import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // lifting the data back up
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
         {/*this sets a pointer to the saveExpenseDataHandler function 
         in this ExpenseForm instance*/}
        {isEditing && <ExpenseForm onStopEditing={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} /> }
    </div>
    );
};

export default NewExpense;