import React, {useState, Fragment, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // now using refs to listen for values, so dont need to listen 
    // for every keystroke in state
    // I know this is technically an awful place to implement refs but I just wanna play
    // refs are best when I want to read a value and not use it

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;   
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        // convert to a number and com pare if less than 1
        if(+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age greater than 0.'
            });
            return;
        }
        // passing AddUser state back down to the App
        props.onAddUser(enteredName, enteredUserAge);
        //console.log(enteredUsername, enteredAge);

        // setEnteredAge('');
        // setEnteredUsername('');

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    //state handlers - once again I've changed to using refs for this portion

    // const usernameChangeHandler = (e) => {
    //     setEnteredUsername(e.target.value);
    // };

    // const ageChangeHandler = (e) => {
    //     setEnteredAge(e.target.value);
    // };

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
                        // onChange={usernameChangeHandler}
                        // value={enteredUsername}
                        ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        // onChange={ageChangeHandler}
                        // value={enteredAge}
                        ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
        //</Wrapper>
    );
};

export default AddUser;