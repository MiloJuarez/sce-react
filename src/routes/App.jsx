import React from "react";
import "@styles/global.css";
import NavItem from "../components/NavItem";

const App = () => {
    return (
        <React.Fragment>
            <h1>BUILDING...</h1>
            <NavItem label={"Escuelas"} active={true} url={"/#escuelas"} />
            <NavItem label={"Inicio"} active={false} url={"/#inicio"} />
        </React.Fragment>
    );
};

export default App;
