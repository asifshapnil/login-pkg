import { Button } from "react-bootstrap";
import FormBuilderComponent, { FormConfig } from "../form/form-builder/form-builder.component";
import * as yup from "yup";
import './login.scss';
import { FC, RefObject } from "react";

interface LoginProps {
    formRef: RefObject<unknown>;
    initialValues: { [key: string]: string };
    formConfig: FormConfig;
    validationSchema: yup.ObjectSchema<any>;
    loginAction: {
        variant: string; 
        label: string; 
        event: () => void; 
    };
}


const styles = {
    loginContainer: {
        height: '100vh'
    },
    loginPageBacksplash: {
        width: '100vw',
        height: '60vh',
        background: 'linear-gradient(to right, #ebebeb, #9e9e9e)',
        borderBottomLeftRadius: '55% 71%',
        borderBottomRightRadius: '54% 71%',
        overflow: 'hidden'
    },
    loginCardWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginCard: {
        borderRadius: '5px',
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '-10rem',
        padding: '1rem'
    },
    loginFont: {
        fontSize: '18px',
        fontWeight: '700'
    }
}


const Login: FC<LoginProps> = ({
    formRef,
    initialValues,
    formConfig,
    validationSchema,
    loginAction
}) => {
    return (
        <>
            <div className="login-container" style={styles.loginContainer}>
                <div className="login-page-backsplash" style={styles.loginPageBacksplash}></div>
                <div className="login-card-wrapper p-2" style={styles.loginCardWrapper}>
                    <div className="bg-light shadow-lg" style={{
        borderRadius: '5px',
        width: '30rem',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '-10rem',
        padding: '1rem'
    }}>
                        <div>
                            <div style={styles.loginFont}>
                                Login to test system
                            </div>
                        </div>

                        <div>
                            <FormBuilderComponent
                                formRef={formRef}
                                initialValues={initialValues}
                                validation={validationSchema}
                                formConfig={formConfig}
                            />
                        </div>

                        <Button
                            variant={loginAction.variant}
                            className="btn mt-5"
                            onClick={loginAction.event}
                        >
                            {loginAction.label}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;