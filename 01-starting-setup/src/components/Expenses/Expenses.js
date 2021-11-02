import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import React, { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items
        .filter(exp => exp.date.getFullYear().toString() === filteredYear);

    
    
    return (<div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
               
               {/* ...and the most lean way keeps the logic out of the return - what we have uncommented...
               {filteredExpenses.length === 0 && <p>No expenses found...</p>}
               {filteredExpenses.length > 0 && 
                    filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>))
                } */}
               
               {/*  ifs and for not allowed in brackets so  we have to use a lot of ternarys
                if the ternary gets too long we can short hand hack it the way it's done above*/}
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found...</p>
                ) : (
                    filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>))
                    ) 
                } */}
            </Card>
            </div>)
}

export default Expenses;