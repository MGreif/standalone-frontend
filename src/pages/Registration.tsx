import React from "react";
import { RegistrationForm } from "../components/RegistrationForm";
import classes from './Registration.module.css'

export const Registration: React.FC<any> = () => {
    return <div className={classes.container}>
        <div className={classes.modalContainer}>
            <RegistrationForm />
        </div>
    </div>
}