import React from "react";

import "@styles/Schools.scss";
import ContentTitle from "@components/ContentTitle";
import BtnArrowBack from "@components/BtnArrowBack";
import ContentHeader from "@components/ContentHeader";
import BtnAddResource from "@components/BtnAddResource";

const Schools = () => {
    return (
        <div className='Schools'>
            <ContentHeader>
                <BtnArrowBack />
                <ContentTitle label={"ESCUELAS"} />
            </ContentHeader>
            <BtnAddResource model={"Escuela"} />
        </div>
    );
};

export default Schools;
