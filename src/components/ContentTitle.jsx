import React from "react";

import "@styles/ContentTitle.scss";

const areEqual = (prevProps, nextProps) => {
    if (prevProps.label === nextProps.label) {
        return true;
    }
    return false;
};

let ContentTitle = ({ label }) => {
    return <h2 className='ContentTitle'>{label}</h2>;
};

export default ContentTitle = React.memo(ContentTitle, areEqual);
