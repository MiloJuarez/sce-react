import React from "react";
import "@styles/Menu.scss";

let Menu = ({ handleToggle, toggle }) => {
    return (
        <div className={`Menu ${toggle ? "open" : ""}`} onClick={handleToggle}>
            <div className='Menu__icon'></div>
        </div>
    );
};

export default Menu = React.memo(Menu);
