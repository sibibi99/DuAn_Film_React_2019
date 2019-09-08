import React, { useState } from "react";
import './Header.scss';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Logo from '../../../Assets/img/fox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUserCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faBars, faUserCircle)

 function Header(props) {
   console.log(props);
   

  const Menu = () => {
    let x = document.getElementById('Hide');
    let content = document.getElementById('content');
    if (x.style.display === 'block') {
      x.style.display = 'none'
    } else {
      x.style.display = 'block';
      content.style.display = 'block';
    }
    let y = document.getElementById('Hide2');
    if (y.style.display === 'block') {
      y.style.display = 'none'
    } else {
      y.style.display = 'block';
    }

  }
  const LogOut = () => {
    localStorage.removeItem('userLogin');
    props.history.push('/');
  }

  // Status cho dang nhap
  const [isStatus, setStatus] = useState(props.isLogin)
  console.log(isStatus);


  const dangNhapStatus = () => {

    if (isStatus === true) {
      return ( <div><FontAwesomeIcon icon={faUserCircle} className='icon' size="2x" /> Hi Si NGuyen
      <button className='btn btn-warning' onClick={() => LogOut()}>LogOut</button></div>
      )
    } else {
      return <NavLink to='login' className='header__login'><FontAwesomeIcon icon={faUserCircle} className='icon' size="2x" /> Đăng Nhập</NavLink>
    }
  }


  return (
    <section className="header">
      <div className="header__content" id='content' >
        <NavLink to='/'>

          <img src={Logo} alt="" />

        </NavLink>
        <ul className="header__menu" id='Hide'>
          <li><a href='#lichchieu'>Lịch Chiếu</a></li>
          <li><a href='#cumrap'>Cụm Rạp</a></li>
          <li><a href='#cumrap'>Tin Tức</a></li>
        </ul>
        <div className="header__button" id='Hide2'>

          {/* // Goi Ham */}
          {dangNhapStatus()}

        </div>

        <FontAwesomeIcon icon={faBars} size="2x" className='bar' onClick={() => Menu()} />

      </div>
    </section>

  )
}

// Đưa dữ liệu trên Reducer xuống
const mapStateToProp = state => {
  console.log(state.QuanLyNguoiDungReducer.isLogin);
  return {
    isLogin: state.QuanLyNguoiDungReducer.isLogin
  };
};

export default (withRouter,connect(mapStateToProp,null))(Header);