import React from "react";

import "@styles/RowDetail.scss";

const areEqual = (prevProps, nextProps) => {
    if (
        prevProps.label === nextProps.label &&
        prevProps.value === nextProps.value
    ) {
        return true;
    }
    return false;
};

let RowDetail = ({ label, value }) => {
    return (
        <div className='RowDetail'>
            <p className='RowDetail__label'>{label}</p>
            <p className='RowDetail__value'>{value}</p>
        </div>
    );
};

export default RowDetail = React.memo(RowDetail, areEqual);
