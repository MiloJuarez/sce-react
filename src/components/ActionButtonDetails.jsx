import React from "react";

import { FaList } from "react-icons/fa";

import "@styles/ActionButtonDetails.scss";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.model === nextProps.model) {
        return true;
    }
    return false;
};

let ActionButtonDetails = ({ model, action }) => {
    return (
        <div
            className='ActionButtonDetails'
            onClick={action}
            title={`Detalles ${model ?? ""}`}>
            <FaList className='DetailsIcon' />
        </div>
    );
};

export default ActionButtonDetails = React.memo(ActionButtonDetails, areEqual);
