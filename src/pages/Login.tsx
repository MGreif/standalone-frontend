import {ModalLayout} from "../layout/ModalLayout";
import { LoginForm } from "../components/LoginForm";

export const Login: React.FC<any> = () => {
    return <ModalLayout>
        <LoginForm />
    </ModalLayout>
}