import {ModalLayout} from "../layout/ModalLayout";
import { LoginForm } from "../components/LoginForm";
import React from "react";

export const Login: React.FC<any> = () => {
    return <ModalLayout>
        <LoginForm />
    </ModalLayout>
}