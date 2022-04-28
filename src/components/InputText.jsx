import React from "react";

import { inputKeyUp } from "@hooks/useInputKeyUp";

import "@styles/InputText.scss";

const areEqual = (prevProps, nextProps) => {
    if (
        prevProps.label === nextProps.label &&
        prevProps.name === nextProps.name &&
        prevProps.inputValue === nextProps.inputValue
    ) {
        return true;
    }
    return false;
};

let InputText = ({
    label = "Example",
    name = "example",
    inputValue = "",
    onChangeEvt,
    error = "",
}) => {
    return (
        <div className={`InputText ${inputValue != "" ? "hasValue" : ""}`}>
            <input
                type='text'
                name={`${name}`}
                id={`${name}`}
                defaultValue={`${inputValue}`}
                onKeyUp={inputKeyUp}
                onChange={onChangeEvt}
            />
            <span className='InputText__label' htmlFor={`${name}`}>
                {label}
            </span>
            {error != "" ? <span>{error}</span> : null}
        </div>
    );
};

export default InputText = React.memo(InputText, areEqual);
