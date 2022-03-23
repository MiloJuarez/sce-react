import React from "react";
import "@styles/NavItem.scss";

const NavItem = ({ label, active, url, action }) => {
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

export default React.memo(NavItem);
