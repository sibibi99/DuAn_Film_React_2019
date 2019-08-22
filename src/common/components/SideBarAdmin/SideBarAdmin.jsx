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
          <ul className="list-unstyled navbar__sub-list js-sub-list">
            <li>
              <a href="index.html">Dashboard 1</a>
            </li>
            <li>
              <a href="index2.html">Dashboard 2</a>
            </li>
            <li>
              <a href="index3.html">Dashboard 3</a>
            </li>
            <li>
              <a href="index4.html">Dashboard 4</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="chart.html">
            <i className="fas fa-chart-bar" />Charts</a>
        </li>
        <li>
          <a href="table.html">
            <i className="fas fa-table" />Tables</a>
        </li>
        <li>
          <a href="form.html">
            <i className="far fa-check-square" />Forms</a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-calendar-alt" />Calendar</a>
        </li>
        <li>
          <a href="map.html">
            <i className="fas fa-map-marker-alt" />Maps</a>
        </li>
        <li className="has-sub">
          <a className="js-arrow" href="#">
            <i className="fas fa-copy" />Pages</a>
          <ul className="list-unstyled navbar__sub-list js-sub-list">
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="register.html">Register</a>
            </li>
            <li>
              <a href="forget-pass.html">Forget Password</a>
            </li>
          </ul>
        </li>
        <li className="has-sub">
          <a className="js-arrow" href="#">
            <i className="fas fa-desktop" />UI Elements</a>
          <ul className="list-unstyled navbar__sub-list js-sub-list">
            <li>
              <a href="button.html">Button</a>
            </li>
            <li>
              <a href="badge.html">Badges</a>
            </li>
            <li>
              <a href="tab.html">Tabs</a>
            </li>
            <li>
              <a href="card.html">Cards</a>
            </li>
            <li>
              <a href="alert.html">Alerts</a>
            </li>
            <li>
              <a href="progress-bar.html">Progress Bars</a>
            </li>
            <li>
              <a href="modal.html">Modals</a>
            </li>
            <li>
              <a href="switch.html">Switchs</a>
            </li>
            <li>
              <a href="grid.html">Grids</a>
            </li>
            <li>
              <a href="fontawesome.html">Fontawesome Icon</a>
            </li>
            <li>
              <a href="typo.html">Typography</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div className="ps__rail-x" style={{left: 0, bottom: 0}}><div className="ps__thumb-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>
</aside>


  )
}
