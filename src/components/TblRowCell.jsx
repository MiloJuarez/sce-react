import React from "react";

import "@styles/TblRowCell.scss";

const areEqual = (prevProps, nextProps) => {
    if (
        prevProps.value === nextProps.value &&
        prevProps.children === nextProps.children
    ) {
        return true;
    }
    return false;
};

// Use children property when passing a component
let TblRowCell = ({ value, children }) => {
    return <div className='TblRowCell'>{value ?? children}</div>;
};

export default TblRowCell = React.memo(TblRowCell, areEqual);
