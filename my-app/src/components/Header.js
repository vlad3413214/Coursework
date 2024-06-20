import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import image1 from './images/3.png';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img src={image1} alt="Logo" width="30" height="30" />
        Бухгалтерія ЗВО
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">Про сайт</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Галерея</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">Новини</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Контакти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;