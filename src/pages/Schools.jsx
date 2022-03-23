import React from "react";

import "@styles/Schools.scss";
import ContentTitle from "@components/ContentTitle";
import BtnArrowBack from "@components/BtnArrowBack";

const Schools = () => {
    return (
        <div className='Schools'>
            <ContentTitle label={"ESCUELAS"} />
            <BtnArrowBack />
        </div>
    );
};

export default Schools;
