import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getSchools, getSchoolLocation } from "../schools";
import useFetch from "@hooks/useFetch";
import endpoints from "@api/endpoints";

import AppContext from "@context/AppContext";
import TblColumnHeader from "@components/TblColumnHeader";
import TblHeader from "@components/TblHeader";
import ActionButtonSelect from "@components/ActionButtonSelect";
import ActionButtonDetails from "@components/ActionButtonDetails";
import ActionButtonEdit from "@components/ActionButtonEdit";
import ActionButtonsContainer from "@components/ActionButtonsContainer";
import TblRowCell from "@components/TblRowCell";
import TblRow from "@components/TblRow";
import "@styles/SchoolTable.scss";

const SchoolTable = () => {
    const { showCompleteNavbar } = useContext(AppContext);
    console.log(endpoints.schools.all());
    const schools = useFetch(endpoints.schools.all());
    console.log(schools);
    let navigate = useNavigate();

    const showDetails = (url) => {
        navigate(url, { state: { fromSchools: true } });
    };

    return (
        <div className='SchoolTable'>
            <TblHeader columns={3}>
                <TblColumnHeader label={"Nombre"} />
                <TblColumnHeader label={"Ubicacion"} />
                <TblColumnHeader label={"Acciones"} />
            </TblHeader>
            <div className='SchoolTable__body'>
                {schools.map((school) => {
                    return (
                        <TblRow
                            cells={2}
                            index={school.id}
                            key={`schoolItem-${school.id}`}>
                            <TblRowCell value={school.name} />
                            <TblRowCell value={getSchoolLocation(school)} />
                            <TblRowCell>
                                <ActionButtonsContainer>
                                    <ActionButtonSelect
                                        model={"Escuela"}
                                        action={() => showCompleteNavbar(true)}
                                    />
                                    <ActionButtonDetails
                                        model={"Escuela"}
                                        action={() =>
                                            showDetails(
                                                `escuela/detalle/${school.id}`
                                            )
                                        }
                                    />
                                    <ActionButtonEdit model={"Escuela"} />
                                </ActionButtonsContainer>
                            </TblRowCell>
                        </TblRow>
                    );
                })}
            </div>
        </div>
    );
};

export default React.memo(SchoolTable);
