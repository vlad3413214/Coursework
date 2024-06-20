import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css'; // Підключаємо файл стилів
import image1 from './images/slid1.png';
import image2 from './images/slid2.jpg';
import image3 from './images/slid3.jpg';

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={image1} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Бухгалтерія ЗВО</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Бухгалтерія ЗВО</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Бухгалтерія ЗВО</h5>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;