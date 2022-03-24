import React, { useState } from "react";
import Navbar from "@components/Navbar";
import "@styles/Header.scss";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

let Header = () => {
    const APP_NAME = process.env.APP_NAME;
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };
    return (
        <div className='Header'>
            <Navbar />
            <Menu handleToggle={() => handleToggleMenu()} toggle={toggleMenu} />
            <h1>{APP_NAME}</h1>
            {toggleMenu ? <MobileMenu /> : null}
        </div>
    );
};

export default Header = React.memo(Header);
