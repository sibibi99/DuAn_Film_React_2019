import React from 'react';
import './Header.scss';
import Logo from '../../../Assets/img/fox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars,  faUserCircle } from '@fortawesome/free-solid-svg-icons';
library.add( faBars, faUserCircle )


export default function Header() {

  const Menu = () =>{
    let x = document.getElementById('Hide');
    let content = document.getElementById('content');
    if(x.style.display === 'block'){
      x.style.display = 'none'
    } else {
      x.style.display = 'block';
      content.style.display = 'block';
    }
    let y = document.getElementById('Hide2');
    if(y.style.display === 'block'){
      y.style.display = 'none'
    } else {
      y.style.display = 'block';
    }
  

  }

  return (
    <section className="header">
      <div className="header__content"  id='content' >

        <img src={Logo} alt=""/>
        <ul className="header__menu" id='Hide'>
          <li><a href='#lichchieu'>Lịch Chiếu</a></li>
          <li><a href='#cumrap'>Cụm Rạp</a></li>
          <li><a >Tin Tức</a></li>
        </ul>
        <div className="header__button"  id='Hide2'>
        <a className='header__login'><FontAwesomeIcon icon={faUserCircle} className='icon' size="2x"/> Đăng Nhập</a>
        </div>
        
        <FontAwesomeIcon icon={faBars} size="2x" className='bar' onClick={() => Menu()}/>
       
      </div>
    </section>

  )
}
