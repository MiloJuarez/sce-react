import React from "react";

import "@styles/NotFound.scss";

let NotFound = () => {
    return (
        <div className='NotFound'>
            <p className='NotFound__message'>404 | RECURSO NO ENCONTRADO</p>
        </div>
    );
};

export default NotFound = React.memo(NotFound);
