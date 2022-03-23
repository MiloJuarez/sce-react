import React from "react";

import "@styles/TblHeader.scss";

const TblHeader = ({ children, columns }) => {
    return (
        <div
            className={`TblHeader ${columns !== null ? "col-" + columns : ""}`}>
            {children}
        </div>
    );
};

export default TblHeader;
