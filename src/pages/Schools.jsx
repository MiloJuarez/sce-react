import React from "react";

import "@styles/Schools.scss";
import ContentTitle from "@components/ContentTitle";
import BtnArrowBack from "@components/BtnArrowBack";
import ContentHeader from "@components/ContentHeader";
import BtnAddResource from "@components/BtnAddResource";
import ContentActions from "@components/ContentActions";
import TblColumnHeader from "@components/TblColumnHeader";
import TblHeader from "@components/TblHeader";
import ActionButtonSelect from "@components/ActionButtonSelect";
import ActionButtonDetails from "@components/ActionButtonDetails";
import ActionButtonEdit from "@components/ActionButtonEdit";
import ActionButtonsContainer from "@components/ActionButtonsContainer";
import TblRowCell from "../components/TblRowCell";

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
            <TblHeader columns={3}>
                <TblColumnHeader label={"Nombre"} />
                <TblColumnHeader label={"Ubicacion"} />
                <TblColumnHeader label={"Acciones"} />
            </TblHeader>
            <ActionButtonsContainer>
                <ActionButtonSelect model={"Escuela"} />
                <ActionButtonDetails model={"Escuela"} />
                <ActionButtonEdit model={"Escuela"} />
            </ActionButtonsContainer>
            <TblRowCell value={"UNIVERSIDAD TECNOLOGICA DE LA SELVA"} />
        </div>
    );
};

export default Schools;
