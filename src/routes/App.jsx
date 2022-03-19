import React from "react";

import { BrowserRouter } from "react-router-dom";

import Layout from "@containers/Layout";
import "@styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout></Layout>
        </BrowserRouter>
    );
};

export default App;
