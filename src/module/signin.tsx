import { createRef, useState } from "react";
import { FormConfig, Login } from "../package";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    console.log(111111111);
    
    const formRef = createRef();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        email: '',
        password: ''
    })

    const formConfig: FormConfig = {
        controls: [
            {
                name: "email",
                label: "Email",
                placeholder: "example@domain.com",
                type: "text",
            },
            {
                name: "password",
                label: "password",
                placeholder: "******",
                type: "password",
            },
        ]
    }

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required"),
    })

    const onSubmit = () => {
        const form: any = formRef.current;

        if (form) {
            form.handleSubmit();
            console.log(form.values);
            const { email, password } = form.values;
            if (!email || !password) return;
            navigate(`profile?email=${email}`)
        }
    }

    const loginAction = {
        variant: "primary",
        label: "Signin",
        event: onSubmit
    }
    return (
        <Login
            formRef={formRef}
            initialValues={initialValues}
            formConfig={formConfig}
            validationSchema={validationSchema}
            loginAction={loginAction}
        />
    )
}

export default SignIn;