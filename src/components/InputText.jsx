import React from "react";

import "@styles/InputText.scss";

const areEqual = (prevProps, nextProps) => {
    if (
        prevProps.label === nextProps.label &&
        prevProps.name === nextProps.name &&
        prevProps.placeholder === nextProps.placeholder
    ) {
        return true;
    }
    return false;
};

const onKeyUpEvt = (evt) => {
    let input = evt.target;
    let value = input.value;

    let parent = input.parentNode;

    if (value) {
        parent.classList.add("hasValue");
    } else {
        parent.classList.remove("hasValue");
    }
};

let InputText = ({
    label = "Example",
    name = "example",
    placeholder = "Example",
}) => {
    return (
        <div className='InputText'>
            <input
                type='text'
                name={`${name}`}
                id={`${name}`}
                onKeyUp={onKeyUpEvt}
            />
            <span className='InputText__label' htmlFor={`${name}`}>
                {label}
            </span>
        </div>
    );
};

export default InputText = React.memo(InputText, areEqual);
