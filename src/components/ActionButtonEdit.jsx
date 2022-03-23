import React from "react";

import { FaPencilAlt } from "react-icons/fa";

import "@styles/ActionButtonEdit.scss";

const ActionButtonEdit = ({ model, action }) => {
    return (
        <div
            className='ActionButtonEdit'
            onClick={action}
            title={`Editar ${model ?? ""}`}>
            <FaPencilAlt className='EditIcon' />
        </div>
    );
};

export default ActionButtonEdit;
