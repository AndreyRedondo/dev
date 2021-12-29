import React, { useState } from "react";
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErroModal";


const AddUser = (props) => {
    const [enteredUsername, setEntereUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const addUSerHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name (non-empty values)'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (non-empty values and higher than 0)'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEntereUserName('')
        setEnteredAge('')

    }

    const userNameChangeHandler = (event) => {
        setEntereUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUSerHandler}>
                    <label htmlFor="username" >Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={userNameChangeHandler}>
                    </input>
                    <label htmlFor="username" >Age (in years</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}>
                    </input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;