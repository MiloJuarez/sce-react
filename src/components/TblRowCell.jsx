import React from "react";

import "@styles/TblRowCell.scss";

// Use children property when passing a component
const TblRowCell = ({ value, children }) => {
    return <div className='TblRowCell'>{value ?? children}</div>;
};

export default TblRowCell;
