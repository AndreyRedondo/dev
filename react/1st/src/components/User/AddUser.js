import React, { Fragment, useState, useRef } from "react";
import classes from './AddUser.module.css'
import Card from '../UI/Card'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErroModal";


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState()

    const addUSerHandler = (event) => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name (non-empty values)'
            })
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (non-empty values and higher than 0)'
            })
            return
        }
        props.onAddUser(enteredName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUSerHandler}>
                    <label htmlFor="username" >Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="username" >Age (in years</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
};

export default AddUser;