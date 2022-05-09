import React from "react";
import { RegistrationForm } from "../components/RegistrationForm";
import {ModalLayout} from "../layout/ModalLayout";

export const Registration: React.FC<any> = () => {
    return <ModalLayout>
            <RegistrationForm />
    </ModalLayout>
}