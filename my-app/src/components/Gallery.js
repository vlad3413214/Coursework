import React from 'react';
import './Gallery.css'; 
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
import new13 from './images/3.png';
import new14 from './images/1.png';
import new15 from './images/2.png';
import new16 from './images/slid1.png';
import new17 from './images/slid2.jpg';
import new18 from './images/slid3.jpg';

function Gallery() {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Галерея</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <img src={new1} alt="Gallery 1" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new2} alt="Gallery 2" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new3} alt="Gallery 3" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new4} alt="Gallery 4" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new5} alt="Gallery 5" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new6} alt="Gallery 6" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new7} alt="Gallery 7" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new8} alt="Gallery 8" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new9} alt="Gallery 9" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new10} alt="Gallery 10" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new11} alt="Gallery 11" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new12} alt="Gallery 12" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new13} alt="Gallery 13" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new14} alt="Gallery 14" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new15} alt="Gallery 15" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new16} alt="Gallery 15" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new17} alt="Gallery 15" className="img-fluid rounded gallery-image" />
        </div>
        <div className="col-md-4 mb-4">
          <img src={new18} alt="Gallery 15" className="img-fluid rounded gallery-image" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;