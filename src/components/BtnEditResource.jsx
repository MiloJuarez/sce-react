import React from "react";

import { FaPencilAlt } from "react-icons/fa";

import "@styles/BtnEditResource.scss";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.model === nextProps.model) {
        return true;
    }
    return false;
};

let BtnEditResource = ({ model, action }) => {
    return (
        <div
            className='BtnEditResource'
            onClick={action}
            title={`Editar ${model ?? ""}`}>
            <FaPencilAlt className='EditIcon' />
            Editar
        </div>
    );
};

export default BtnEditResource = React.memo(BtnEditResource, areEqual);
