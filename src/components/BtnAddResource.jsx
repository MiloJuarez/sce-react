import React from "react";

import { FaPlus } from "react-icons/fa";

import "@styles/BtnAddResource.scss";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.model === nextProps.model) {
        return true;
    }
    return false;
};

let BtnAddResource = ({ model, action }) => {
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

export default BtnAddResource = React.memo(BtnAddResource, areEqual);
