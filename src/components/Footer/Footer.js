import React from 'react';
// Потому что в макете иконка Facebook меняется в зависимости от разрешения
import MediaQuery from 'react-responsive';
import Link from '../Link/Link';
import './Footer.css';

import iconGithub from '../../images/icon_github.svg';
import iconFacebookCircle from '../../images/icon_facebook_circle.svg';
import iconFacebookSquare from '../../images/icon_facebook_square.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
        <div className="footer__menu">

          <ul className="footer__list">
            <li className="footer__item">
              <Link navLink={true} title="Перейти на Главную" className="footer__link" to="/" value="Главная"/>
            </li>
            <li className="footer__item">
              <Link title="Открыть сайт Яндекс.Практикума в новом окне" href="https://praktikum.yandex.ru"
                    className="footer__link" value="Яндекс.Практикум" target="_blank"/>
            </li>
          </ul>
          <ul className="footer__list footer__list_social-icon">
            <li className="footer__item footer__item_social-icon">
              <Link linkImage={true} title="Открыть Github в новом окне" href="#"
                    classNameLink="footer__link footer__link_social-icon" src={iconGithub} alt="Github"
                    classNameImage="footer__social-icon" target="_blank"/>
            </li>

            <li className="footer__item footer__item_social-icon">
              <>
                <MediaQuery minWidth={961}>
                  <Link linkImage={true} title="Открыть Facebook в новом окне" href="#"
                        classNameLink="footer__link footer__link_social-icon" src={iconFacebookSquare} alt="Facebook"
                        classNameImage="footer__social-icon" target="_blank"/>
                </MediaQuery>

                <MediaQuery minWidth={711} maxWidth={960}>
                  <Link linkImage={true} title="Открыть Facebook в новом окне" href="#"
                        classNameLink="footer__link footer__link_social-icon" src={iconFacebookCircle} alt="Facebook"
                        classNameImage="footer__social-icon" target="_blank"/>
                </MediaQuery>

                <MediaQuery maxWidth={710}>
                  <Link linkImage={true} title="Открыть Facebook в новом окне" href="#"
                        classNameLink="footer__link footer__link_social-icon" src={iconFacebookSquare} alt="Facebook"
                        classNameImage="footer__social-icon" target="_blank"/>
                </MediaQuery>
              </>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
