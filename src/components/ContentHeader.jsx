import React from "react";

import "@styles/ContentHeader.scss";

const ContentHeader = ({ children }) => {
    return <div className='ContentHeader'>{children}</div>;
};

export default ContentHeader;
