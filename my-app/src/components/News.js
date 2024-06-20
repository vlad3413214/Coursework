import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './News.css';
import new1 from './images/news1.jpg';
import new2 from './images/news2.jpg';
import new3 from './images/news3.jpg';
import new4 from './images/news4.jpg';
import new5 from './images/news5.jpg';
import new6 from './images/news6.jpg';
import new7 from './images/news7.jpg';
import new8 from './images/news8.jpg';
import new9 from './images/news9.jpg';
import new10 from './images/news10.jpg';
import new11 from './images/news11.jpg';
import new12 from './images/news12.jpg';

// Імітація отримання новин з сервера
const fetchedNews = [
  { id: 1, title: 'Лікарняний під час відпустки: як оплачувати?', content: '', imageUrl: new1 },
  { id: 2, title: 'Заклади вищої освіти цьогоріч отримають від держави 19 млрд грн', content: '', imageUrl: new2 },
  { id: 3, title: 'Коледжі та виші можуть отримати кошти на ремонт і розвиток', content: '', imageUrl: new3 },
  { id: 4, title: 'Розподіл видатків держбюджету між закладами вищої освіти державної форми власності', content: '', imageUrl: new4 },
  { id: 5, title: 'Розподіл бюджетних коштів між житомирськими університетами: хто скільки отримає', content: '', imageUrl: new5 },
  { id: 6, title: 'Конкурс на отримання бюджетних коштів за КПКВК 2201140', content: '', imageUrl: new6 },
  { id: 7, title: 'РОЗПОЧАВСЯ ДОДАТКОВИЙ ПЕРІОД РЕЄСТРАЦІЇ ДЛЯ УЧАСТІ В ЄВІ ТА ЄФВВ', content: '', imageUrl: new7 },
  { id: 8, title: 'Як перерахують пенсії працюючим пенсіонерам', content: '', imageUrl: new8 },
  { id: 9, title: 'АВТОМАТИЗАЦІЯ ОБЛІКУ', content: '', imageUrl: new9 },
  { id: 10, title: 'Доступ до інформації без меж. Інформаційно-довідкові сервіси для бухгалтера, юриста та бізнесу', content: '', imageUrl: new10 },
  { id: 11, title: ' Повітряна тривога в робочий час: що із зарплатою?', content: '', imageUrl: new11 },
  { id: 12, title: 'Новини бюджетної бухгалтерії (10.05.2024 - 16.06.2024)', content: '', imageUrl: new12 },
];

function News() {
  const location = useLocation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchedNewsSlice = location.pathname === '/' ? fetchedNews.slice(0, 10) : fetchedNews;
    setNews(fetchedNewsSlice);
  }, [location]);

  return (
    <div className="news-container">
      <h2 className="text-center mb-4">Головні Новини</h2>
      {news.map(newsItem => (
        <div key={newsItem.id} className="news-item">
          <div className="background-image" style={{ backgroundImage: `url(${newsItem.imageUrl})` }}></div>
          <div className="news-content">
            <h2>{newsItem.title}</h2>
            <p>{newsItem.content}</p>
            <Link to={`/news/${newsItem.id}`} className="read-more">Читати більше...</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;