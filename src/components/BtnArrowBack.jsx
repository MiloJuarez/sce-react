import React from "react";

import { FaArrowLeft } from "react-icons/fa";

import "@styles/BtnArrowBack.scss";

const BtnArrowBack = ({ goBack }) => {
    return (
        <div className='BtnArrowBack' onClick={goBack}>
            <FaArrowLeft className='BtnArrowBack__icon' title='Regresar' />
        </div>
    );
};

export default BtnArrowBack;
