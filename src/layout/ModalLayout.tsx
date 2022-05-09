import React from "react";
import classes from './ModalLayout.module.css'
import {RegistrationForm} from "../components/RegistrationForm";

export const ModalLayout: React.FC<any> = (props) => {
    return <div className={classes.container}>
        <div className={classes.modalContainer}>
            {props.children}
        </div>
    </div>
}