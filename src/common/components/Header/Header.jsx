import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add( faBars )


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
        <h1 className="header__title">The Fox</h1>
        <ul className="header__menu" id='Hide'>
          <li><a href>Lịch Chiếu</a></li>
          <li><a href>Cụm Rạp</a></li>
          <li><a href>Tin Tức</a></li>
        </ul>
        <div className="header__button"  id='Hide2'>
          <button>Login</button>
        </div>
        
        <FontAwesomeIcon icon={faBars} size="2x" className='bar' onClick={() => Menu()}/>
       
      </div>
    </section>

  )
}
