import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './SideBarAdmin.scss';
import Logo from '../../../Assets/img/fox.png';

export default function SideBarAdmin() {
  return (
<aside className="menu-sidebar d-none d-lg-block">
  <div className="logo">
    <Link to='admin'>
      <img src={Logo } alt="Fox Admin" />
    </Link>
  </div>
  <div className="menu-sidebar__content js-scrollbar1 ps">
    <nav className="navbar-sidebar">
      <ul className="list-unstyled navbar__list">
        <li >
          <NavLink exact to='/admin'  >
            <i className="fas fa-tachometer-alt" />Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/admin/quanlyphim' >
            <i className="fas fa-chart-bar" />Quản Lý Phim</NavLink>
        </li>
        <li>
          <NavLink to='/admin/quanlythanhvien'>
            <i className="fas fa-table" />Quản Lý Thành Viên</NavLink>
        </li>
        <li>
          <NavLink to='/admin/quanlydatve'>
            <i className="fas fa-table" />Quản Lý Đặt Vé</NavLink>
        </li>
        <li>
          <NavLink to='/admin/quanlytintuc'>
            <i className="fas fa-table" />Quản Lý Tin Tức</NavLink>
        </li>

      </ul>
    </nav>
    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
</aside>


  )
}
