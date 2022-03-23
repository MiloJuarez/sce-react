import React from "react";

import "@styles/Schools.scss";
import ContentTitle from "@components/ContentTitle";
import BtnArrowBack from "@components/BtnArrowBack";
import ContentHeader from "../components/ContentHeader";

const Schools = () => {
    return (
        <div className='Schools'>
            <ContentHeader>
                <BtnArrowBack />
                <ContentTitle label={"ESCUELAS"} />
            </ContentHeader>
        </div>
    );
};

export default Schools;
