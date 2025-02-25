import React from 'react';
import accountantImage from './images/bugal.jpg'; // Шлях до вашої картинки
import nupp from './images/nupp.png';
import './About.css';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="text">
          <h2>Бухгалтерія закладу вищої освіти</h2>
          <p>
            Бухгалтерія закладу вищої освіти є невід'ємною частиною нашої інституції, забезпечуючи ефективне управління фінансовими ресурсами і забезпечуючи фінансову прозорість і стабільність. Наша команда бухгалтерів з високим рівнем кваліфікації відповідає за раціональне використання бюджетних коштів і вчасне здійснення фінансових операцій.
          </p>
          <p>
            Основні функції бухгалтерії включають ведення обліку доходів і витрат, складання фінансової звітності відповідно до вимог законодавства, аналіз фінансових показників для підтримки стратегічного управління і прийняття рішень адміністрацією університету.
          </p>
          <p>
            Ми прагнемо до того, щоб кожен студент, викладач і співробітник міг мати доступ до чіткої та зрозумілої інформації про фінансові аспекти нашого закладу, сприяючи стабільному функціонуванню всіх аспектів університетського життя.
          </p>
          <p>
            Бухгалтерія нашого закладу прагне до високих стандартів професіоналізму, ефективності і відкритості, сприяючи розвитку нашого університету як важливого освітнього і наукового центру.
          </p>
          <a className="image_nupp" href="https://nupp.edu.ua" target="_blank" rel="noopener noreferrer">
              <img src={nupp} alt="nupp" className="social-icon" />
            </a>
        </div>
        <div className="image">
          <img src={accountantImage} alt="Accountant" />
        </div>
       
      </div>
    </div>
  );
}

export default About;