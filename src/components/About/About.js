import React from 'react';
import './About.css';
import author from '../../images/author.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__author-img" src={author} alt="Фото автора"/>
        <div className="about__container-description">
          <h2 className="about__title-description">Об авторе</h2>
          <p className="about__text-description">
            Это блок с описанием автора проекта.
            Здесь следует указать, как вас зовут, чем вы занимаетесь,
            какими технологиями разработки владеете.
          </p>
          <p className="about__text-description">
            Также можно рассказать о процессе обучения в Практикуме,
            чему вы тут научились, и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
