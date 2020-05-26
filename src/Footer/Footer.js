import React from 'react';

import './../App.css';
import FooterMenuItem from "./FooterMenuItem";

function Footer(props) {
    //const topMenu = props.topMenu;
    const footerMenu = props.footerMenu;
    const footerMenuItem = (item)=>{props.footerMenuItem(item);}
    return (
        <div>
            <ul>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {footerMenu.map((el) => <FooterMenuItem item={el} footerMenu={footerMenu} footerMenuItem={footerMenuItem}/>)}
            </ul>
        </div>
    );
}

export default Footer;
