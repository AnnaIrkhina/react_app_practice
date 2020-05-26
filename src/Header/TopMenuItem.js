import React from 'react';

import './../App.css';

function TopMenuItem(props) {
    const clicked = (e)=>{
        props.handleTopMenu(item);
        e.preventDefault();
    }
  const item = props.item;
  return (
   <li>
       <a href = "#" onClick={clicked}>{item}</a>
   </li>
  );
}

export default TopMenuItem;
