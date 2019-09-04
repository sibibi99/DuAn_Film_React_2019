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
import AdminPage from './pages/AdminPage/AdminPage';
import QuanLyPhim from './pages/QuanLyPhim/QuanLyPhim';
import QuanLyDatVe from './pages/QuanLyDatVe/QuanLyDatVe';
import QuanLyThanhVien from './pages/QuanLyThanhVien/QuanLyThanhVien';
import QuanLyTinTuc from './pages/QuanLyTinTuc/QuanLyTinTuc';
import SignupForm from './common/components/FormikForm/SignupForm';




function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <AdminTemplate path='/admin/quanlyphim' Component={QuanLyPhim}></AdminTemplate>
          <AdminTemplate path='/admin/quanlythanhvien' Component={QuanLyThanhVien}></AdminTemplate>
          <AdminTemplate path='/admin/quanlydatve' Component={QuanLyDatVe}></AdminTemplate>
          <AdminTemplate path='/admin/quanlytintuc' Component={QuanLyTinTuc}></AdminTemplate>
          <AdminTemplate path='/admin' Component={AdminPage}></AdminTemplate>
          <HomeTemplate  path='/home'  Component={HomePage}></HomeTemplate>
          <HomeTemplate  path='/courselist'  Component={CourseList}></HomeTemplate>
          <HomeTemplate  path='/coursedetails/:courseid'  Component={CourseDetails}></HomeTemplate>
          <HomeTemplate  path='/login'  Component={Login}></HomeTemplate>
          <HomeTemplate  path='/dangky'  Component={SignupForm}></HomeTemplate>
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
