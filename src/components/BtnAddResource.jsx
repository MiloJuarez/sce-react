import React from "react";

import { FaPlus } from "react-icons/fa";

import "@styles/BtnAddResource.scss";

const BtnAddResource = ({ model, action }) => {
    return (
        <div
            className='BtnAddResource'
            onClick={action}
            title={`Agregar ${model}`}>
            <FaPlus className='PlusIcon' />
            {model}
        </div>
    );
};

export default BtnAddResource;
