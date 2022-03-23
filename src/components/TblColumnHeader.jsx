import React from "react";

import "@styles/TblColumnHeader.scss";

const TblColumnHeader = ({ label }) => {
    return <h2 className='TblColumnHeader'>{label}</h2>;
};

export default TblColumnHeader;
