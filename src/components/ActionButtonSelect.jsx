import React from "react";

import { FaFolderOpen } from "react-icons/fa";

import "@styles/ActionButtonSelect.scss";

const ActionButtonSelect = ({ model, action }) => {
    return (
        <div
            className='ActionButtonSelect'
            onClick={action}
            title={`Seleccionar ${model ?? ""}`}>
            <FaFolderOpen className='FolderIcon' />
        </div>
    );
};

export default ActionButtonSelect;
