import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";
import Schools from "@pages/Schools";
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import "@styles/global.css";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Schools />} />
                        <Route path='/escuelas' element={<Schools />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
