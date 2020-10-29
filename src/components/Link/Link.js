import React from 'react';
import { NavLink } from 'react-router-dom';
import './Link.css';

function Link(props) {
  function linkFunktion() {
    if (props.navLink) { // если навигация
      return (
        <NavLink
          title={props.title}
          className={`link ${props.className}`}
          to={props.to}
        >
          {props.value}
        </NavLink>
      );
    }
    if (props.linkImage) { // если ссылка с картинкой
      return (
        <a
          title={props.title}
          className={`link ${props.classNameLink}`}
          href={props.href}
          // target="_blank"
          target={props.target}
        >
          <img
            src={props.src}
            alt={props.alt}
            className={props.classNameImage}
          />
        </a>);
    } // и просто ссылка
    return (
      <a
        title={props.title}
        className={`link ${props.className}`}
        href={props.href}
        target={props.target}
      >
        {props.value}
      </a>);
  }

  return (
    <>
      {linkFunktion()}
    </>
  );
}

export default Link;
