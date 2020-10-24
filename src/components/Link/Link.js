import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

function Link(props) {
  return (

    <NavLink
      className={`link ${ props.className }`}
      to={props.to}
    >
      {props.value}
    </NavLink>


  );
}

export default Link;
