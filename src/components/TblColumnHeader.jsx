import React from "react";

import "@styles/TblColumnHeader.scss";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.label === nextProps.label) {
        return true;
    }
    return false;
};

let TblColumnHeader = ({ label }) => {
    return <h2 className='TblColumnHeader'>{label}</h2>;
};

export default TblColumnHeader = React.memo(TblColumnHeader, areEqual);
