import React from 'react';
import './Footer.css';
import iconGithub from '../../images/icon_github.svg';
import iconFacebookCircle from '../../images/icon_facebook_circle.svg';
import iconFacebookSquare from '../../images/icon_facebook_square.svg';
import Link from '../Link/Link';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
        <div className="footer__menu">

          <ul className="footer__list">
            <li className="footer__item">
              <Link
                navLink={true}
                title="Главная"
                className="footer__link"
                to="/"
                value="Главная"
              />
            </li >
            <li className="footer__item">
              <Link
                title="Открыть сайт Яндекс.Практикума в новом окне"
                href="https://praktikum.yandex.ru"
                className="footer__link"
                value="Яндекс.Практикум"
              />
            </li>
          </ul>
          <ul className="footer__list footer__list_social-icon">
            <li className="footer__item">
              <Link
                linkImage={true}
                title="Открыть Github в новом окне"
                href="#"
                classNameLink="footer__link"
                src={iconGithub}
                alt="Github"
                classNameImage="footer__social-icon"
              />
            </li>

            <li className="footer__item footer__item_social-icon">
              <Link
                linkImage={true}
                title="Открыть Facebook в новом окне"
                href="#"
                classNameLink="footer__link"
                src={iconFacebookSquare}
                alt="Facebook"
                classNameImage="footer__social-icon"
              />
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
