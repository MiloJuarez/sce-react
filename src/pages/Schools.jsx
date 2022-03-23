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
import TblRowCell from "@components/TblRowCell";
import TblRow from "@components/TblRow";

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
            <TblRow cells={2} index={0}>
                <TblRowCell value={"UNIVERSIDAD TECNOLOGICA DE LA SELVA"} />
                <TblRowCell value={"UNIVERSIDAD TECNOLOGICA DE LA SELVA"} />
                <TblRowCell>
                    <ActionButtonsContainer>
                        <ActionButtonSelect model={"Escuela"} />
                        <ActionButtonDetails model={"Escuela"} />
                        <ActionButtonEdit model={"Escuela"} />
                    </ActionButtonsContainer>
                </TblRowCell>
            </TblRow>
        </div>
    );
};

export default Schools;
