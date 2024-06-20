import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Контакти</h2>
      <p>
      Ми серйозно ставимося до наших фінансових зобов’язань перед студентами, викладачами та співробітниками. Якщо вам потрібна допомога з вашим фінансовим рахунком, є питання щодо оплати навчання або виникли будь-які інші фінансові труднощі, будь ласка, не соромтеся звертатися до нашого відділу бухгалтерії.
      </p>
      <p>
      Ми також пишаємося співпрацею з іншими фінансовими установами та інвесторами для забезпечення стабільного фінансового становища нашого закладу.
      </p>
      <div className="map-and-form">
        <div className="map">
          <iframe
            title="Google Map"
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2587.154628958465!2d34.5643562!3d49.5759721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1sru!2sua!4v1718833669352!5m2!1sru!2sua"
            allowFullScreen>
          </iframe>
        </div>
        <div className="contact-form">
          <form>
            <label>
              Введіть ваше ім'я користувача
              <input type="text" name="userName" placeholder="Ім'я користувача" />
            </label>
            <label>
              Введіть ваш email
              <input type="email" name="email" placeholder="Email" />
            </label>
            <label>
              Введіть тему
              <input type="text" name="subject" placeholder="Тема" />
            </label>
            <label>
              Повідомлення
              <textarea name="message" placeholder="Введіть ваше повідомлення"></textarea>
            </label>
            <button type="submit">Надіслати</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;