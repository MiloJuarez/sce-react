import React from "react";

import "@styles/ContentActions.scss";

let ContentActions = ({ children }) => {
    return <div className='ContentActions'>{children}</div>;
};

export default ContentActions = React.memo(ContentActions);
