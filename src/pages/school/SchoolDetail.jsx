import React from "react";
import { useParams } from "react-router-dom";

import { getSchool } from "../../schools";

import BtnArrowBack from "@components/BtnArrowBack";
import ContentActions from "@components/ContentActions";
import ContentHeader from "@components/ContentHeader";
import ContentTitle from "@components/ContentTitle";
import RowDetail from "@components/RowDetail";
import RowDetailContainer from "@components/RowDetailContainer";
import "@styles/SchoolDetail.scss";
import BtnEditResource from "../../components/BtnEditResource";

const SchoolDetail = () => {
    let params = useParams();
    let school = getSchool(parseInt(params.schoolId));
    return (
        <div className='SchoolDetail'>
            <ContentHeader>
                <BtnArrowBack />
                <ContentTitle label={"DETALLES"} />
            </ContentHeader>
            <ContentActions>
                <BtnEditResource model={"Escuela"} />
            </ContentActions>
            <RowDetailContainer>
                <RowDetail label={"NOMBRE"} value={school.nombre} />
                <RowDetail
                    label={"CLAVE DE LA INSTITUCIÓN"}
                    value={school.clave}
                />
                <RowDetail
                    label={"CLAVE CENTRO DE TRABAJO"}
                    value={school.clave_centro_trabajo}
                />
                <RowDetail label={"TURNO"} value={school.turno} />
                <RowDetail label={"DIRECCIÓN"} value={school.direccion} />
                <RowDetail label={"ESTADO"} value={school.estado} />
                <RowDetail label={"MUNICIPIO"} value={school.municipio} />
                <RowDetail label={"CIUDAD"} value={school.ciudad} />
            </RowDetailContainer>
        </div>
    );
};

export default SchoolDetail;
