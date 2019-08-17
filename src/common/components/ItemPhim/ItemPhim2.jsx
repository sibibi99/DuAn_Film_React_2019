import React from 'react';
import './ItemPhim.scss';
import Phim from '../../../Assets/img/phim1.jpg';
import Play from '../../../Assets/img/play.png';


export default function ItemPhim2() {
  return (
    <div className="movie__item ">
      <div className="movie__start"><span>5.5</span></div>
      <div className='movie__overlay'>
        <img src={Play} alt="" className='img' />
        <img src={Phim} alt='' className='movie__img' />
      </div>
      <h3>Chuyện Kinh Dị Lúc Nửa Đêm - Scary Stories To Tell</h3>
      <p>105 phut</p>
      <button>Xem Thêm</button>
    </div>

  )
}
