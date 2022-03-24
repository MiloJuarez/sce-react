import React from "react";
import "@styles/NavItem.scss";

const areEqual = (prevProps, nextProps) => {
    if (
        prevProps.label === nextProps.label &&
        prevProps.active === nextProps.active &&
        prevProps.url === nextProps.url
    ) {
        return true;
    }
    return false;
};

let NavItem = ({ label, active, url, action }) => {
    const handleClick = () => {
        location.replace(url);
        action.call();
    };
    return (
        <div
            className={`NavItem ${active ? "NavItem-active" : ""}`}
            onClick={handleClick}>
            {label}
        </div>
    );
};

export default NavItem = React.memo(NavItem, areEqual);
