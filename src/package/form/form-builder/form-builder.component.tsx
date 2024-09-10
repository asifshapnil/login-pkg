import { ErrorMessage, Formik } from "formik";
import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import "./form-builder.scss";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Control {
  name: string;
  label: string;
  placeholder?: string;
  type:
    | string
    | "text"
    | "textarea"
    | "number"
    | "checkbox"
    | "switch"
    | "date"
    | "datetime"
    | "email"
    | "select"
    | "password"
    | "chips"
    | "file";
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
}

export interface FormConfig {
  controls: Control[];
}

interface FormBuilderComponentProps {
  formRef?: any;
  formConfig: FormConfig;
  initialValues: any;
  validation: any;
  renderCount?: any;
  fileConfig?: {
    fileName?: string;
    isShowImage: boolean;
    isEdit: boolean;
    preview: any;
    isLink?: boolean;
    onRemoveFile: () => void;
  };
}

const FormBuilderComponent: FC<FormBuilderComponentProps> = ({
  formRef,
  formConfig,
  initialValues,
  validation,
  fileConfig,
  renderCount,
}) => {

  const { controls } = formConfig;
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      {Object.keys(initialValues).length ? (
        <Formik
          key={renderCount || 0}
          innerRef={formRef}
          enableReinitialize
          onSubmit={(values: any) => {}}
          validationSchema={validation}
          initialValues={initialValues}
        >
          {({
            handleSubmit,
            handleChange,
            setFieldValue,
            values,
            touched,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div className="">
                {controls && controls.length
                  ? controls.map((control, i) => (
                      <div key={i}>
                        {(() => {
                          switch (control.type) {
                            case "text":
                              return (
                                <div
                                  className="d-flex flex-column justify-content-start align-items-start mt-3 mb-3"
                                >
                                  <div className="mb-2">
                                    {control.label}
                                    {control.required && (
                                      <span className="text-danger">*</span>
                                    )}
                                  </div>
                                  <div className="w-100">
                                    <Form.Group>
                                      <div className="d-flex align-items-center">
                                        <Form.Control
                                          type="text"
                                          placeholder={control.placeholder}
                                          name={control.name}
                                          onChange={(e: any) => {
                                            handleChange(e);
                                            setFieldValue(
                                              control?.name,
                                              e.target.value
                                            );
                                          }}
                                          value={values[control?.name]}
                                          required={control.required ?? false}
                                          isValid={
                                            touched[control.name] &&
                                            !errors[control.name]
                                          }
                                          isInvalid={
                                            (!!touched[control.name] &&
                                              !!errors[control.name]) ??
                                            false
                                          }
                                        />
                                        
                                      </div>
                                      <ErrorMessage
                                        name={control.name}
                                        component="div"
                                        className="error-message"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              );
                            case "email":
                              return (
                                <div
                                  className="d-flex flex-column justify-content-start align-items-start mt-3 mb-3"
                                >
                                  <div className="mb-2">
                                    {control.label}
                                    {control.required && (
                                      <span className="text-danger">*</span>
                                    )}
                                  </div>
                                  <div className="w-100">
                                    <Form.Group>
                                      <Form.Control
                                        type="email"
                                        placeholder={control.placeholder}
                                        name={control.name}
                                        onChange={(e: any) => {
                                          handleChange(e);
                                          setFieldValue(
                                            control?.name,
                                            e.target.value
                                          );
                                        }}
                                        value={values[control?.name]}
                                        required={control.required ?? false}
                                        disabled={control.disabled ?? false}
                                        isValid={
                                          touched[control.name] &&
                                          !errors[control.name]
                                        }
                                        isInvalid={
                                          (!!touched[control.name] &&
                                            !!errors[control.name]) ??
                                          false
                                        }
                                      />
                                      <ErrorMessage
                                        name={control.name}
                                        component="div"
                                        className="error-message"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              );
                            case "password":
                              return (
                                <div
                                  className={"d-flex flex-column justify-content-start align-items-start mt-3 mb-3"}
                                >
                                  <div className="mb-2">
                                    {control.label}
                                    {control.required && (
                                      <span className="text-danger">*</span>
                                    )}
                                  </div>
                                  <div className="w-100">
                                    <Form.Group>
                                      <div className="d-flex align-items-center gap-2 position-relative ">
                                        <Form.Control
                                          type={
                                            showPassword ? "text" : "password"
                                          }
                                          placeholder={control.placeholder}
                                          name={control.name}
                                          onChange={(e: any) => {
                                            handleChange(e);
                                            setFieldValue(
                                              control?.name,
                                              e.target.value
                                            );
                                          }}
                                          value={values[control?.name]}
                                          required={control.required ?? false}
                                          readOnly={control.readOnly ?? false}
                                          disabled={control.disabled ?? false}
                                          isValid={
                                            touched[control.name] &&
                                            !errors[control.name]
                                          }
                                          isInvalid={
                                            (!!touched[control.name] &&
                                              !!errors[control.name]) ??
                                            false
                                          }
                                        />
                                        <button
                                          type="button"
                                          onClick={togglePasswordVisibility}
                                          className="password-toggle-button border-0 position-absolute end-0 me-2"
                                        >
                                          {showPassword ? (
                                            <FontAwesomeIcon
                                              icon={faEyeSlash}
                                            />
                                          ) : (
                                            <FontAwesomeIcon icon={faEye} />
                                          )}
                                        </button>
                                      </div>

                                      <ErrorMessage
                                        name={control.name}
                                        component="div"
                                        className="error-message"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              );
                            default:
                              return null;
                          }
                        })()}
                      </div>
                    ))
                  : ""}
              </div>
            </Form>
          )}
        </Formik>
      ) : null}
    </div>
  );
};

export default FormBuilderComponent;
