import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasErrror = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasErrror ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            { hasErrror && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}