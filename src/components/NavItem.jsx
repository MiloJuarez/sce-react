import React from "react";
import "@styles/NavItem.scss";

const NavItem = ({ label, active, url }) => {
    const handleClick = () => {
        location.replace(url);
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
