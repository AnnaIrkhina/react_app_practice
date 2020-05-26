import React from 'react';

import './../App.css';

function FooterMenuItem(props) {
    const clicked = (e)=>{
        props.footerMenuItem(item.title);
        e.preventDefault();
    }
  const item = props.item;
  return (
   <li>
       <a href = "#" onClick={clicked}>{item.title}</a>
       <ul>
           {item.items.map(el => <li key={el}>{el}</li>)}
       </ul>
   </li>
  );
}

export default FooterMenuItem;
