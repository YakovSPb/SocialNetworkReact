import React from "react";
import styles from "./FormsControls.module.css";
import { FieldValidatorType } from "../../../utils/validator/validators";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type FormControlProppsType = {
    meta: WrappedFieldMetaProps
}


const FormControl: React.FC<FormControlProppsType> = ({ meta: { touched, error }, children }) => {
    const hasErrror = touched && error;
    return (
        <div className={styles.formControl + " " + (hasErrror ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasErrror && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
    name: FormKeysType,
    validators: FieldValidatorType[],
    component: React.FC<WrappedFieldProps>,
    props = {},
    text = "") {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>
