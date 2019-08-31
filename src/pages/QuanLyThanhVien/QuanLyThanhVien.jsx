import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { layDanhSachNguoiDungAction } from '../../redux/PageQuanLyThanhVien/action'
import './QuanLyThanhVien.scss';
import DanhSachThanhVien from './DanhSachThanhVien/DanhSachThanhVien';
import Modal2 from '../../common/components/Modal/Modal2';
import FormThemNguoiDung from '../../common/components/QuanLyNguoiDung/FormThemNguoiDung';
import FormSuaNguoiDung from '../../common/components/QuanLyNguoiDung/FormSuaNguoiDung';




function QuanLyThanhVien(props) {

  const [hienModal, setHienModal] = useState(true);
  const themNguoiDung = () => {   
      return <Modal2 Component={FormThemNguoiDung} title="Thêm người dùng" />
    }
    const xoaNguoiDung = (taikhoan) => {
      console.log("Xoa: " + taikhoan);
  
    }
    const suaNguoiDung = (nguoidung) => {
      // console.log("Sua: " + nguoidung.taikhoan);
      return <Modal2 Component={FormSuaNguoiDung} title="Sua Nguoi Dung" />
    }


  // Lấy Danh Sách Người dùng;
  useEffect(() => {
    props.layDanhSachNguoiDung();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  return (
    <div className="main-content">
      {/* <button onClick = {() => {
        setHienModal(!hienModal)
        
        }}> Show</button> */}

      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {/* DATA TABLE */}
              <h1 className="title-1 m-b-35">Danh Sách Người Dùng</h1>


              <div className="table-data__tool row">
                <div className="table-data__tool-left col-md-6">

                  <div className="input-group ">
                    <input type="email" id="input2-group2" name="input2-group2" placeholder="Tìm người dùng" className="form-control w-50" />
                    <div className="input-group-btn">
                      <button className="btn btn-danger ml-2 ">Tìm Kiếm</button>
                    </div>
                  </div>

                </div>
                <div className="table-data__tool-right ">
                  <button className="au-btn au-btn-icon au-btn--green au-btn--small" data-toggle="modal" data-target="#modelId" 
                  onClick = {() => {
                    setHienModal(!hienModal)}}
                    
                  >
                    <i className="zmdi zmdi-plus"></i>Thêm Người Dùng</button>
                </div>
              </div>


              <DanhSachThanhVien
                // Props cha truyen xuong con
                DSND={props.DSND}
                xoaND={(taikhoan) => { xoaNguoiDung(taikhoan) }}
                suaND={(nguoidung) => { suaNguoiDung(nguoidung) }} />
            </div>
          </div>
        </div>
      </div>
       {/* Modal them nguoi dung*/}
       {/* {themNguoiDung()} */}
       {suaNguoiDung()}
    </div>

  )
}

// Đưa dữ liệu trên Reducer xuống
const mapStateToProp = (state) => {

  return {
    DSND: state.QuanLyNguoiDungReducer.DSND
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    layDanhSachNguoiDung: () => {
      dispatch(layDanhSachNguoiDungAction());
    }
  }
}

export default connect(mapStateToProp, mapDispathToProps)(QuanLyThanhVien)