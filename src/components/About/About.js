import React from 'react';
import './About.css';
import author from '../../images/author.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={author} alt="Фото автора"/>
        <div className="author__container">
          <h3 className="author__title">Об авторе</h3>
          <p className="author__text">
            Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими
            технологиями разработки владеете.
          </p>
          <p className="author__text">
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь
            потенциальным заказчикам.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
