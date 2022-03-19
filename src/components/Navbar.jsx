import React from "react";
import "@styles/Navbar.scss";
import NavItem from "@components/NavItem";

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavItem label={"INICIO"} active={false} url={"/#inicio"} />
            <NavItem label={"ESCUELAS"} active={true} url={"/#escuelas"} />
            <NavItem label={"REPORTES"} active={false} url={"/#reportes"} />
            <NavItem
                label={"HABILITAR CAPTURA"}
                active={false}
                url={"/#captura"}
            />
        </nav>
    );
};

export default React.memo(Navbar);
