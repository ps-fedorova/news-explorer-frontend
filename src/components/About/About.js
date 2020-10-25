import React from 'react';
import './About.css';
import author from '../../images/author.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img className="author-img" src={author} alt="Фото автора"/>
        <div className="description">
          <h2 className="description__title">Об авторе</h2>
          <p className="description__text">
            Это блок с описанием автора проекта.
            Здесь следует указать, как вас зовут, чем вы занимаетесь,
            какими технологиями разработки владеете.
          </p>
          <p className="description__text">
            Также можно рассказать о процессе обучения в Практикуме,
            чему вы тут научились, и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
