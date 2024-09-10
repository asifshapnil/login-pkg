import { FormConfig } from "../form/form-builder/form-builder.component";
import './login.scss';
import { FC } from "react";
interface LoginProps {
    formRef: any;
    initialValues: any;
    formConfig: FormConfig;
    validationSchema: any;
    loginAction: any;
}
declare const Login: FC<LoginProps>;
export default Login;
