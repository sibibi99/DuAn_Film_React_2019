import React from 'react';
import './SideBarAdmin.scss';
import Logo from '../../../Assets/img/fox.png';

export default function SideBarAdmin() {
  return (
<aside className="menu-sidebar d-none d-lg-block">
  <div className="logo">
    <a href="#">
      <img src={Logo } alt="Cool Admin" />
    </a>
  </div>
  <div className="menu-sidebar__content js-scrollbar1 ps">
    <nav className="navbar-sidebar">
      <ul className="list-unstyled navbar__list">
        <li className="active has-sub">
          <a className="js-arrow" href="#">
            <i className="fas fa-tachometer-alt" />Dashboard</a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-chart-bar" />Quản Lý Phim</a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-table" />Quản Lý Thành Viên</a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-table" />Quản Lý Đặt Vé</a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-table" />Quản Lý Tin Tức</a>
        </li>

      </ul>
    </nav>
    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
</aside>


  )
}
