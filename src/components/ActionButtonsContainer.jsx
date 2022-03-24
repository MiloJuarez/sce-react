import React from "react";

import "@styles/ActionButtonsContainer.scss";

let ActionButtonsContainer = ({ children }) => {
    return <div className='ActionButtonsContainer'>{children}</div>;
};

export default ActionButtonsContainer = React.memo(ActionButtonsContainer);
