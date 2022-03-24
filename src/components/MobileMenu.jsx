import React from "react";
import Navbar from "@components/Navbar";
import "@styles/MobileMenu.scss";

let MobileMenu = () => {
    return (
        <div className='MobileMenu'>
            <Navbar />
        </div>
    );
};

export default MobileMenu = React.memo(MobileMenu);
