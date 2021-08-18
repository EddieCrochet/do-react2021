import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
    <div className="new-expense">
         {/*this sets a pointer to the saveExpenseDataHandler function 
         in this ExpenseForm instance*/}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;