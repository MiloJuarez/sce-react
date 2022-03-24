import React from "react";

import { FaFolderOpen } from "react-icons/fa";

import "@styles/ActionButtonSelect.scss";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.model === nextProps.model) {
        return true;
    }
    return false;
};

let ActionButtonSelect = ({ model, action }) => {
    return (
        <div
            className='ActionButtonSelect'
            onClick={action}
            title={`Seleccionar ${model ?? ""}`}>
            <FaFolderOpen className='FolderIcon' />
        </div>
    );
};

export default ActionButtonSelect = React.memo(ActionButtonSelect, areEqual);
