import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "@hooks/useFetch";
import endpoints from "@api/endpoints";

import BtnArrowBack from "@components/BtnArrowBack";
import ContentActions from "@components/ContentActions";
import ContentHeader from "@components/ContentHeader";
import ContentTitle from "@components/ContentTitle";
import RowDetail from "@components/RowDetail";
import RowDetailContainer from "@components/RowDetailContainer";
import "@styles/SchoolDetail.scss";
import BtnEditResource from "../../components/BtnEditResource";
import SchoolForm from "@containers/SchoolForm";

const SchoolDetail = () => {
    let params = useParams();
    const school = useFetch(endpoints.schools.get(parseInt(params.schoolId)));
    return (
        <div className='SchoolDetail'>
            <ContentHeader>
                <BtnArrowBack />
                <ContentTitle label={"DETALLES"} />
            </ContentHeader>
            <ContentActions>
                <BtnEditResource model={"Escuela"} />
            </ContentActions>
            <SchoolForm />
            <RowDetailContainer>
                <RowDetail label={"NOMBRE"} value={school.name} />
                <RowDetail
                    label={"CLAVE DE LA INSTITUCIÓN"}
                    value={school.sep_key}
                />
                <RowDetail
                    label={"CLAVE CENTRO DE TRABAJO"}
                    value={school.work_center_key}
                />
                <RowDetail label={"TURNO"} value={school.duty} />
                <RowDetail label={"DIRECCIÓN"} value={school.address} />
                <RowDetail label={"ESTADO"} value={school.state} />
                <RowDetail label={"MUNICIPIO"} value={school.town} />
                <RowDetail label={"CIUDAD"} value={school.city} />
            </RowDetailContainer>
        </div>
    );
};

export default SchoolDetail;
