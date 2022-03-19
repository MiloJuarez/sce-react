import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";
import Schools from "@pages/Schools";
import "@styles/global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Schools />} />
                    <Route path='/escuelas' element={<Schools />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
