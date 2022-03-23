import React from "react";

import "@styles/Schools.scss";
import ContentTitle from "@components/ContentTitle";
import BtnArrowBack from "@components/BtnArrowBack";
import ContentHeader from "@components/ContentHeader";
import BtnAddResource from "@components/BtnAddResource";
import ContentActions from "@components/ContentActions";

const Schools = () => {
    return (
        <div className='Schools'>
            <ContentHeader>
                <BtnArrowBack />
                <ContentTitle label={"ESCUELAS"} />
            </ContentHeader>
            <ContentActions>
                <BtnAddResource model={"Escuela"} />
            </ContentActions>
        </div>
    );
};

export default Schools;
