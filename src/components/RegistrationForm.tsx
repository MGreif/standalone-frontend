import { Button, Input, InputWrapper } from '@mantine/core'
import React, { useState } from 'react'
import { createUser } from '../gateway/user'
import classes from './RegistrationForm.module.css'

type TFormState = {
    [key: string]: string
}

export const RegistrationForm: React.FC<any> = () => {
    const [values, setValues] = useState<TFormState>({})


    const handleChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        createUser(values).then(res => console.log(res))
    }

    return (
        <div className={classes.container}>
            <h1>Registration</h1>
            <InputWrapper label="First Name">
                <Input onChange={handleChange} name="name"></Input>
            </InputWrapper>
            <InputWrapper label="Last Name">
                <Input onChange={handleChange} name="surname"></Input>
            </InputWrapper>
            <InputWrapper label="Username">
                <Input onChange={handleChange} name="username"></Input>
            </InputWrapper>
            <InputWrapper label="Password">
                <Input onChange={handleChange} name="password"></Input>
            </InputWrapper>
            <Button onClick={handleClick} className={classes.button}>Register</Button>
        </div>
    )
}
