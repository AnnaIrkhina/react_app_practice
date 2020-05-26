import React from 'react';

import './../App.css';
import './TopMenuItem';
import TopMenuItem from "./TopMenuItem";
function Header(props) {
  const topMenu = props.topMenu;
  const handleTopMenu = props.handleTopMenu;
  return (
    <div>
      <ul>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          {topMenu.map((el, index) => <TopMenuItem handleTopMenu={handleTopMenu} key={index} item={el}/>)}

      </ul>
    </div>
  );
}

export default Header;
