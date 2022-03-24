import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";
import Schools from "@pages/school/Schools";
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import "@styles/global.css";
import SchoolDetail from "@pages/school/SchoolDetail";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Schools />} />
                        <Route path='/escuelas' element={<Schools />} />
                        <Route
                            path='escuela/detalle/:schoolId'
                            element={<SchoolDetail />}
                        />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
