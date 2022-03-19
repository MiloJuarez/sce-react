import React from "react";

const NavItem = ({ label, active, url }) => {
    const handleClick = () => {
        location.replace(url);
    };
    return (
        <div
            className={`NavItem ${active ? "NavItem-Active" : ""}`}
            onClick={handleClick}>
            {label}
        </div>
    );
};

export default NavItem;
