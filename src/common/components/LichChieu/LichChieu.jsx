import React from 'react';
import './LichChieu.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ItemPhim from '../ItemPhim/ItemPhim';

export default function LichChieu() {


  return (
    <section className='lichchieu' id='lichchieu'>
      <div className="lichchieu__menu">
      <button className='active'>Đang Chiếu</button>
      <button>Sắp Chiếu</button>
      </div>

      <div className="lichchieu__content">
    
      <OwlCarousel
        dots={false}
        nav
        autoplay
        loop
        items= {4}
        margin={10}
        responsiveClass = {true}
    

        
      >
        <ItemPhim/>
        <ItemPhim/>
        <ItemPhim/>
        <ItemPhim/>

      </OwlCarousel>


      </div>
    </section>
  )
}
