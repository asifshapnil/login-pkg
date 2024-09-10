### contents
1. How to run this app
2. How to use this to other project
3. How to publish to npm



1. How to run this app

### `npm install`
### `npm run start`


2. How to use this to other project

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


3. How to publish to npm
### npm i microbundle
as built in react builder creates frontend build version where as we need dist with index.js

### change build script
"build": "microbundle"

### add the followings to package.json
"main": "dist/index.js",
"module": "dist/index.esm.js",
"types": "dist/index.d.ts",
"files": [
    "dist/**/*"
],
"peerDependencies": {
    "bootstrap": "^5.3.3",
    "react-bootstrap": "^2.10.4"
},

### remove private if it remains in package.json if you are not about to publish in a private registry. 
### change the versions in each publish
### npm login
### npm build
### npm pack
### npm publish
