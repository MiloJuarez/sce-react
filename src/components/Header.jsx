import React from "react";
import Navbar from "@components/Navbar";
import "@styles/Header.scss";

const Header = () => {
    const APP_NAME = process.env.APP_NAME;
    return (
        <div className='Header'>
            <Navbar />
            <h1>{APP_NAME}</h1>
        </div>
    );
};

export default React.memo(Header);
