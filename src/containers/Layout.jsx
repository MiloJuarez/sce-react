import React from "react";

import Header from "@components/Header";
import "@styles/Layout.scss";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <Header />
            <div className='Layout__pages'>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
