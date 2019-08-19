import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CourseList from './pages/CourseList/CourseList';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import HomeTemplate from './templates/HomeTemplate';
import Login from './pages/Login/Login';
import TrangChu from './pages/DuAnDatVePhim/TrangChu';
import TrangChiTiet from './pages/DuAnDatVePhim/TrangChiTiet';
import TrangDatVe from './pages/DuAnDatVePhim/TrangDatVe';
import AdminTemplate from './templates/AdminTemplate';
import DangKy from './pages/DangKy/DangKy';




function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <AdminTemplate path='/admin' Component={Login}></AdminTemplate>
          <HomeTemplate  path='/home'  Component={HomePage}></HomeTemplate>
          <HomeTemplate  path='/courselist'  Component={CourseList}></HomeTemplate>
          <HomeTemplate  path='/coursedetails/:courseid'  Component={CourseDetails}></HomeTemplate>
          <HomeTemplate  path='/login'  Component={Login}></HomeTemplate>
          <HomeTemplate  path='/dangky'  Component={DangKy}></HomeTemplate>
          {/* <HomeTemplate  path='/admin'  Component={Login}></HomeTemplate> */}
          <HomeTemplate  path='/'  Component={HomePage}></HomeTemplate>
          <HomeTemplate path='/trang-chu' Component={TrangChu} ></HomeTemplate>
          <HomeTemplate path='/chi-tiet-phim/:maPhim' Component={TrangChiTiet} ></HomeTemplate>
          <HomeTemplate path='/chi-tiet-phong-ve/:maLichChieu' Component={TrangDatVe} ></HomeTemplate>
          <HomeTemplate path='/'  Component={TrangChu}></HomeTemplate>
        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
