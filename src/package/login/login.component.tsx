import { Button } from "react-bootstrap";
import FormBuilderComponent, { FormConfig } from "../form/form-builder/form-builder.component";
import * as yup from "yup";
import './login.scss';
import { FC } from "react";

interface LoginProps {
    formRef: any;
    initialValues: any;
    formConfig: FormConfig;
    validationSchema: any;
    loginAction: any;
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
            <div className="login-container" style={{
                height: '100vh'
            }}>
                <div className="login-page-backsplash" style={
                    {
                        width: '100vw',
                        height: '60vh',
                        background: 'linear-gradient(to right, #ebebeb, #9e9e9e)',
                        borderBottomLeftRadius: '55% 71%',
                        borderBottomRightRadius: '54% 71%',
                        overflow: 'hidden'
                      }
                }></div>
                <div className="login-card-wrapper p-2" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div className="bg-light shadow-lg" style={{
                        borderRadius: '5px',
                        width: '30rem',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '-10rem',
                        padding: '1rem'
                    }}>
                        <div>
                            <div style={{
                                fontSize: '18px',
                                fontWeight: '700'
                            }}>
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