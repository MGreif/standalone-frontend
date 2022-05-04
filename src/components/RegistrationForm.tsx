import { Button, Container, Input, InputWrapper } from '@mantine/core'
import React from 'react'
import classes from './RegistrationForm.module.css'

export const RegistrationForm: React.FC<any> = () => {
    return (
        <div className={classes.container}>
            <h1>Registration</h1>
            <InputWrapper label="First Name">
                <Input name="name"></Input>
            </InputWrapper>
            <InputWrapper label="Last Name">
                <Input name="surname"></Input>
            </InputWrapper>
            <InputWrapper label="Username">
                <Input name="username"></Input>
            </InputWrapper>
            <InputWrapper label="Password">
                <Input name="password"></Input>
            </InputWrapper>
            <Button className={classes.button}>Register</Button>
        </div>
    )
}
