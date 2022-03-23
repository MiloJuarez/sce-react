import React from "react";

import "@styles/TblRow.scss";

const TblRow = ({ children, cells = 1, index = 0 }) => {
    return (
        <div
            className={`TblRow ${cells > 1 ? "col-" + (cells + 1) : ""} ${
                index % 2 == 0 ? "TblRow--odd" : "TblRow--even"
            }`}>
            {children}
        </div>
    );
};

export default React.memo(TblRow);
