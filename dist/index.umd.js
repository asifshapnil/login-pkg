!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("react/jsx-runtime"),require("react-dom/client"),require("bootstrap/dist/css/bootstrap.min.css"),require("react-router-dom"),require("react"),require("react-bootstrap"),require("formik"),require("@fortawesome/free-solid-svg-icons"),require("@fortawesome/react-fontawesome"),require("yup")):"function"==typeof define&&define.amd?define(["exports","react/jsx-runtime","react-dom/client","bootstrap/dist/css/bootstrap.min.css","react-router-dom","react","react-bootstrap","formik","@fortawesome/free-solid-svg-icons","@fortawesome/react-fontawesome","yup"],a):a((e||self).asifloginApp={},e.jsxRuntime,e.ReactDOM,0,e.reactRouterDom,e.react,e.reactBootstrap,e.formik,e.freeSolidSvgIcons,e.reactFontawesome,e.yup)}(this,function(e,a,r,t,s,n,i,l,o,d,c){function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var a=Object.create(null);return e&&Object.keys(e).forEach(function(r){if("default"!==r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(a,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}}),a.default=e,a}var f=/*#__PURE__*/m(r),h=/*#__PURE__*/u(c);const p=({formRef:e,formConfig:r,initialValues:t,validation:s,renderCount:c})=>{const{controls:m}=r,[u,f]=n.useState(!1),h=()=>{f(e=>!e)};return a.jsx("div",{children:Object.keys(t).length?a.jsx(l.Formik,{innerRef:e,enableReinitialize:!0,onSubmit:e=>{},validationSchema:s,initialValues:t,children:({handleSubmit:e,handleChange:r,setFieldValue:t,values:s,touched:n,errors:c})=>a.jsx(i.Form,{noValidate:!0,onSubmit:e,children:a.jsx("div",{className:"",children:m&&m.length?m.map((e,m)=>a.jsx("div",{children:(()=>{switch(e.type){case"text":return a.jsxs("div",{className:"d-flex flex-column justify-content-start align-items-start mt-3 mb-3",children:[a.jsxs("div",{className:"mb-2",children:[e.label,e.required&&a.jsx("span",{className:"text-danger",children:"*"})]}),a.jsx("div",{className:"w-100",children:a.jsxs(i.Form.Group,{children:[a.jsx("div",{className:"d-flex align-items-center",children:a.jsx(i.Form.Control,{type:"text",placeholder:e.placeholder,name:e.name,onChange:a=>{r(a),t(e?.name,a.target.value)},value:s[e?.name],required:e.required??!1,isValid:n[e.name]&&!c[e.name],isInvalid:(!!n[e.name]&&!!c[e.name])??!1})}),a.jsx(l.ErrorMessage,{name:e.name,component:"div",className:"error-message"})]})})]});case"email":return a.jsxs("div",{className:"d-flex flex-column justify-content-start align-items-start mt-3 mb-3",children:[a.jsxs("div",{className:"mb-2",children:[e.label,e.required&&a.jsx("span",{className:"text-danger",children:"*"})]}),a.jsx("div",{className:"w-100",children:a.jsxs(i.Form.Group,{children:[a.jsx(i.Form.Control,{type:"email",placeholder:e.placeholder,name:e.name,onChange:a=>{r(a),t(e?.name,a.target.value)},value:s[e?.name],required:e.required??!1,disabled:e.disabled??!1,isValid:n[e.name]&&!c[e.name],isInvalid:(!!n[e.name]&&!!c[e.name])??!1}),a.jsx(l.ErrorMessage,{name:e.name,component:"div",className:"error-message"})]})})]});case"password":return a.jsxs("div",{className:"d-flex flex-column justify-content-start align-items-start mt-3 mb-3",children:[a.jsxs("div",{className:"mb-2",children:[e.label,e.required&&a.jsx("span",{className:"text-danger",children:"*"})]}),a.jsx("div",{className:"w-100",children:a.jsxs(i.Form.Group,{children:[a.jsxs("div",{className:"d-flex align-items-center gap-2 position-relative ",children:[a.jsx(i.Form.Control,{type:u?"text":"password",placeholder:e.placeholder,name:e.name,onChange:a=>{r(a),t(e?.name,a.target.value)},value:s[e?.name],required:e.required??!1,readOnly:e.readOnly??!1,disabled:e.disabled??!1,isValid:n[e.name]&&!c[e.name],isInvalid:(!!n[e.name]&&!!c[e.name])??!1}),a.jsx("button",{type:"button",onClick:h,className:"password-toggle-button border-0 position-absolute end-0 me-2",children:a.jsx(d.FontAwesomeIcon,u?{icon:o.faEyeSlash}:{icon:o.faEye})})]}),a.jsx(l.ErrorMessage,{name:e.name,component:"div",className:"error-message"})]})})]});default:return null}})()},m)):""})})},c||0):null})},x=({formRef:e,initialValues:r,formConfig:t,validationSchema:s,loginAction:n})=>a.jsx(a.Fragment,{children:a.jsxs("div",{className:"login-container",style:{height:"100vh"},children:[a.jsx("div",{className:"login-page-backsplash",style:{width:"100vw",height:"60vh",background:"linear-gradient(to right, #ebebeb, #9e9e9e)",borderBottomLeftRadius:"55% 71%",borderBottomRightRadius:"54% 71%",overflow:"hidden"}}),a.jsx("div",{className:"login-card-wrapper p-2",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsxs("div",{className:"bg-light shadow-lg",style:{borderRadius:"5px",width:"30rem",display:"flex",flexDirection:"column",marginTop:"-10rem",padding:"1rem"},children:[a.jsx("div",{children:a.jsx("div",{style:{fontSize:"18px",fontWeight:"700"},children:"Login to test system"})}),a.jsx("div",{children:a.jsx(p,{formRef:e,initialValues:r,validation:s,formConfig:t})}),a.jsx(i.Button,{variant:n.variant,className:"btn mt-5",onClick:n.event,children:n.label})]})})]})}),g=()=>{console.log(111111111);const e=n.createRef(),r=s.useNavigate(),[t,i]=n.useState({email:"",password:""}),l=h.object().shape({email:h.string().email("Please enter a valid email address").required("Email is required"),password:h.string().required("Password is required")});return a.jsx(x,{formRef:e,initialValues:t,formConfig:{controls:[{name:"email",label:"Email",placeholder:"example@domain.com",type:"text"},{name:"password",label:"password",placeholder:"******",type:"password"}]},validationSchema:l,loginAction:{variant:"primary",label:"Signin",event:()=>{const a=e.current;if(a){a.handleSubmit(),console.log(a.values);const{email:e,password:t}=a.values;if(!e||!t)return;r(`profile?email=${e}`)}}}})},j=()=>{const e=s.useLocation(),r=new URLSearchParams(e.search).get("email");return a.jsx(a.Fragment,{children:r??"Not found"})};f.default.createRoot(document.getElementById("root")).render(a.jsx(function(){return a.jsx(s.BrowserRouter,{children:a.jsxs(s.Routes,{children:[a.jsx(s.Route,{path:"",element:a.jsx(g,{})}),a.jsx(s.Route,{path:"/profile",element:a.jsx(j,{})})]})})},{})),e.FormBuilder=p,e.Login=x});
//# sourceMappingURL=index.umd.js.map
