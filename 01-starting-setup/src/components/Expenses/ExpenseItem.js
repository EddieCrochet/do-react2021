import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {

    //below is naming convention ofr what useState returns
    // it also always retyurns an array
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!!!!');
        console.log(title);
    };

    return (<Card className="expense-item">
        <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
            );
}

export default ExpenseItem;