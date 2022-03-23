import React, { useContext } from "react";

import AppContext from "@context/AppContext";
import NavItem from "@components/NavItem";
import "@styles/Navbar.scss";

const Navbar = () => {
    const { vars, showCompleteNavbar } = useContext(AppContext);

    return (
        <nav className='Navbar'>
            <NavItem
                label={"INICIO"}
                active={false}
                url={"/#inicio"}
                action={() => showCompleteNavbar(false)}
            />
            <NavItem
                label={"ESCUELAS"}
                active={true}
                url={"/#escuelas"}
                action={() => showCompleteNavbar(false)}
            />
            {vars.showAllNavbarItems == true ? (
                <React.Fragment>
                    <NavItem
                        label={"USUARIOS"}
                        active={false}
                        url={"/#usuarios"}
                    />
                    <NavItem
                        label={"PERIODOS"}
                        active={false}
                        url={"/#periodos"}
                    />
                    <NavItem
                        label={"ASIGNAR MATRICULA"}
                        active={false}
                        url={"/#asignar_matricula"}
                    />
                    <NavItem
                        label={"MOVIMIENTOS"}
                        active={false}
                        url={"/#movimientos"}
                    />
                    <NavItem
                        label={"CALIFICACIONES"}
                        active={false}
                        url={"/#calificaciones"}
                    />
                    <NavItem
                        label={"REPORTES"}
                        active={false}
                        url={"/#reportes"}
                    />
                    <NavItem
                        label={"EGREGSADOS"}
                        active={false}
                        url={"/#egresados"}
                    />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <NavItem
                        label={"REPORTES"}
                        active={false}
                        url={"/#reportes"}
                    />
                    <NavItem
                        label={"HABILITAR CAPTURA"}
                        active={false}
                        url={"/#captura"}
                    />
                </React.Fragment>
            )}
        </nav>
    );
};

export default React.memo(Navbar);
