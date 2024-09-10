# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm run start`


How to use this to other project

### `npm install asiflogin-app`

### import to app.tsx/app/jsx `import 'bootstrap/dist/css/bootstrap.min.css'`

### in you consumer component
`import {Login} from 'asiflogin-app'`
`import * as yup from "yup"`
`
### create a ref to get form values
`const formRef = createRef();`

### add form essentials for formik (initialvalues)
const [initialValues, setInitialValues] = useState({
    email: '',
    password: ''
  })


### create formConfiguration object. 
const formConfig: any = {
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

### craete validation schema with yup
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required"),
})

### create call to action for form
const onSubmit = () => {
    const form: any = formRef.current;

    if (form) {
        form.handleSubmit();
        console.log(form.values);
    }
}

const loginAction = {
    variant: "primary",
    label: "Signin",
    event: onSubmit
}

### use Login component with these conf
<Login
    formRef={formRef}
    initialValues={initialValues}
    formConfig={formConfig}
    validationSchema={validationSchema}
    loginAction={loginAction}
/>
