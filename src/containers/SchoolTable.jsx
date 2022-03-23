import React from "react";

import { getSchools } from "../schools";

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
    let schools = getSchools();

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
                            <TblRowCell value={school.location} />
                            <TblRowCell>
                                <ActionButtonsContainer>
                                    <ActionButtonSelect model={"Escuela"} />
                                    <ActionButtonDetails model={"Escuela"} />
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
