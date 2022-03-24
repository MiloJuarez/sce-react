import React from "react";
import { useParams } from "react-router-dom";

import { getSchool } from "../../schools";

import BtnArrowBack from "@components/BtnArrowBack";
import ContentActions from "@components/ContentActions";
import ContentHeader from "@components/ContentHeader";
import ContentTitle from "@components/ContentTitle";
import "@styles/SchoolDetail.scss";

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
                <button type='button'>Editar</button>
            </ContentActions>
            <p>{school.nombre}</p>
            <p>{school.clave}</p>
            <p>{school.clave_centro_trabajo}</p>
            <p>{school.turno}</p>
            <p>{school.direccion}</p>
            <p>{school.estado}</p>
            <p>{school.municipio}</p>
            <p>{school.ciudad}</p>
        </div>
    );
};

export default SchoolDetail;
