import { Button, Input, InputWrapper } from '@mantine/core'
import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { createUser, login } from '../gateway/user'
import classes from './RegistrationForm.module.css'

type TFormState = {
    [key: string]: string
}

export const LoginForm: React.FC<any> = () => {
    const [values, setValues] = useState<TFormState>({})
    const { search } = useLocation();

    const searchParams = React.useMemo(() => new URLSearchParams(search), [search]);

    const redirectionURL = searchParams.get('redirect_to')


    const handleChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
       login({ username: values.username, password: values.password }).then(res => {
         if (redirectionURL?.match(/^(http(s)?:\/\/)?(frontend.greif.me|localhost)(.*)$/)) {
           console.log(redirectionURL)
           window.location.href = redirectionURL
         }
       })
    }

    return (
        <div className={classes.container}>
            <h1>Login</h1>
            <InputWrapper label="Username">
                <Input onChange={handleChange} name="username"></Input>
            </InputWrapper>
            <InputWrapper label="Password">
                <Input onChange={handleChange} name="password" type="password"></Input>
            </InputWrapper>
            <Button onClick={handleClick} className={classes.button}>Login</Button>
        </div>
    )
}
