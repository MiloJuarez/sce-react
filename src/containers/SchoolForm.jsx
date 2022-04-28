import React, { Component } from "react";

import { validateTextInput } from "@hooks/useFormValidation";
import { inputKeyUp } from "@hooks/useInputKeyUp";

import FormControl from "@components/FormControl";

class SchoolForm extends Component {
    constructor(formAction = "", formMethod = "POST", school) {
        super();
        this.formAction = formAction;
        this.formMethod = formMethod;
        this.school = school;
        this.state = {
            nombre: "",
            clave: "",
            errors: {
                nombre: "",
                clave: "",
            },
        };
    }

    onChangeInputValue = (evt) => {
        evt.preventDefault();
        let { name } = evt.target;
        let errors = { ...this.state.errors };
        let error = validateTextInput(evt);
        this.setState({
            errors: {
                ...errors,
                [name]: error,
            },
        });
    };

    render() {
        let { errors } = this.state;
        return (
            <div className='SchoolForm'>
                <form
                    action={`${this.formAction}`}
                    method={`${this.formMethod}`}>
                    <FormControl>
                        <div
                            className={`InputText ${
                                this.school != null ? "hasValue" : ""
                            }`}>
                            <input
                                type='text'
                                name={"nombre"}
                                id={"nombre"}
                                defaultValue={`${
                                    this.school != null
                                        ? this.school?.nombre
                                        : ""
                                }`}
                                onKeyUp={inputKeyUp}
                                onChange={this.onChangeInputValue}
                            />
                            <span className='InputText__label'>NOMBRE</span>
                            {errors.nombre != "" ? (
                                <span>{errors.nombre}</span>
                            ) : null}
                        </div>
                        <div
                            className={`InputText ${
                                this.school != null ? "hasValue" : ""
                            }`}>
                            <input
                                type='text'
                                name={"clave"}
                                id={"clave"}
                                defaultValue={`${
                                    this.school != null
                                        ? this.school?.clave
                                        : ""
                                }`}
                                onKeyUp={inputKeyUp}
                                onChange={this.onChangeInputValue}
                            />
                            <span className='InputText__label'>CLAVE SEP</span>
                            {errors.clave != "" ? (
                                <span>{errors.clave}</span>
                            ) : null}
                        </div>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default SchoolForm;
