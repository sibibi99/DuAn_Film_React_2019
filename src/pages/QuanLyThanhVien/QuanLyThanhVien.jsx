import React, { useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import { layDanhSachNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungActions';

import './QuanLyThanhVien.scss';

 function QuanLyThanhVien(props) {

     // Lấy Danh Sách Người dùng;
     useEffect(() => {
      props.layDanhSachNguoiDung();
      
  }, [props])
  // console.log(props.DSND);
  
  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {/* DATA TABLE */}
              <h3 className="title-5 m-b-35">Danh Sách Người Người Dùng</h3>

              <div className="table-responsive table-responsive-data2">
                <table className="table table-data2">
                  <thead>
                    <tr>
                      <th>
                        <label className="au-checkbox">
                          <input type="checkbox" />
                          <span className="au-checkmark" />
                        </label>
                      </th>
                      <th>Tài Khoản</th>
                      <th>Họ Tên</th>
                      <th>Email</th>
                      <th>Số Điện Thoại</th>
                      <th>Mật Khẩu</th>
                      <th>Mã Người Dùng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                      {props.DSND.map((nguoidung, index) => {
                        
                     return  <Fragment key={index}> 
                       
                    <tr className="tr-shadow"  >
                      <td>
                        <label className="au-checkbox">
                          <input type="checkbox" />
                          <span className="au-checkmark" />
                        </label>
                      </td>
                      
                      <td >{nguoidung.taiKhoan}</td>
                      <td>
                        <span className="status--process">{nguoidung.hoTen}</span>
                      </td>
                      <td > <span className="block-email">{nguoidung.email}</span> </td>
                      <td>{nguoidung.soDt}</td>
                      <td>
                        <span >{nguoidung.matKhau}</span>
                      </td>
                      <td > <span className="admin role">{nguoidung.maLoaiNguoiDung}</span> </td>
                      <td>
                        <div className="table-data-feature">
 
                          <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                            <i className="zmdi zmdi-edit" />
                          </button>
                          <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i className="zmdi zmdi-delete" />
                          </button>
                          <button className="item" data-toggle="tooltip" data-placement="top" title="More">
                            <i className="zmdi zmdi-more" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="spacer" />
               
                    </Fragment> 
                   })}
            
                  </tbody>
                </table>
              </div>
              {/* END DATA TABLE */}
            </div>
          </div>
        </div>
      </div>

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

export default connect(mapStateToProp,mapDispathToProps)(QuanLyThanhVien)