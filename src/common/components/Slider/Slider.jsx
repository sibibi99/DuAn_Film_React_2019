import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider1 from '../../../Assets/img/slider1.jpg';
import slider2 from '../../../Assets/img/slider2.jpg';
import slider3 from '../../../Assets/img/slider3.jpg';
import slider4 from '../../../Assets/img/slider4.jpg';
import './Slider.scss';


export default function Slider() {
  return (
    <div className="slider">
      <OwlCarousel
        dots={false}
        nav
        autoplay
        loop
        items= {1}
  
      >
        <div className="item" ><img src={slider1} alt="" /></div>
        <div className="item"><img src={slider2} alt="" /></div>
        <div className="item"><img src={slider3} alt="" /></div>
        <div className="item"><img src={slider4} alt="" /></div>


      </OwlCarousel>

    </div>



  )
}
