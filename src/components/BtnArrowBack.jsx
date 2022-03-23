import React from "react";

import { FaArrowLeft } from "react-icons/fa";

import "@styles/BtnArrowBack.scss";

const BtnArrowBack = ({ goBack }) => {
    return (
        <div className='BtnArrowBack' onClick={goBack} title='Regresar'>
            <FaArrowLeft className='BtnArrowBack__icon' />
        </div>
    );
};

export default BtnArrowBack;
