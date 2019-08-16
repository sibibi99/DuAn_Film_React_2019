import React from 'react';
import Phim from '../../../Assets/img/phim1.jpg';
import './ItemPhim.scss';

export default function ItemPhim() {
  return (
    <div className="movie__item ">
      <img src={Phim} alt />
      <p>Chuyện Kinh Dị Lúc Nửa Đêm - Scary Stories To Tell In The Dark</p>
      <button>Xem Thêm</button>
    </div>

  )
}
