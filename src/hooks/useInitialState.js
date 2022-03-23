import { useState } from "react";

const globalVars = {
    showAllNavbarItems: false,
    enabledCaptures: [],
    session: {},
};

const useInitialState = () => {
    const [vars, setVars] = useState(globalVars);

    const showCompleteNavbar = (showAll = true) => {
        setVars({
            ...vars,
            showAllNavbarItems: showAll,
        });
    };

    const setEnabledCaptures = (captures = []) => {
        setVars({
            ...vars,
            enabledCaptures: captures,
        });
    };

    const getEnabledCaptures = () => {
        return vars.enabledCaptures;
    };

    const setSessionValue = (session) => {
        setVars({
            ...vars,
            session: session,
        });
    };

    const getSessionValue = () => {
        return vars.session;
    };

    return {
        vars,
        showCompleteNavbar,
        setEnabledCaptures,
        getEnabledCaptures,
        setSessionValue,
        getSessionValue,
    };
};

export default useInitialState;
