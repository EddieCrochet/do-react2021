import React, {useState, Fragment} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age greater than 0.'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        //console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        //<Wrapper>
        <Fragment>
            {/* referring to below --> error is undefined until it exists... this is how we
            conditionally render a jsx element */}
            {error && <ErrorModal 
                title={error.title} 
                message={error.message}
                onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        onChange={usernameChangeHandler}
                        value={enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        onChange={ageChangeHandler}
                        value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
        //</Wrapper>
    );
};

export default AddUser;