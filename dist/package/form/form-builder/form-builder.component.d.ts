import { FC } from "react";
import "./form-builder.scss";
export interface Control {
    name: string;
    label: string;
    placeholder?: string;
    type: string | "text" | "textarea" | "number" | "checkbox" | "switch" | "date" | "datetime" | "email" | "select" | "password" | "chips" | "file";
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
declare const FormBuilderComponent: FC<FormBuilderComponentProps>;
export default FormBuilderComponent;
