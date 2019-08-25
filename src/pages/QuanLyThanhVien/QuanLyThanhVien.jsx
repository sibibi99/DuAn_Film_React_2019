import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { layDanhSachNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungActions';
import './QuanLyThanhVien.scss';
import Modal from '../../common/components/Modal/Modal';


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
              <h1 className="title-1 m-b-35">Danh Sách Người Dùng</h1>


              <div class="table-data__tool row">
                <div class="table-data__tool-left col-md-4">

                  <div className="input-group ">
                    <input type="email" id="input2-group2" name="input2-group2" placeholder="Tìm người dùng" className="form-control" />
                    <div className="input-group-btn">
                      <button className="btn btn-danger">Tìm Kiếm</button>
                    </div>
                  </div>

                </div>
                <div class="table-data__tool-right ">
                  <button class="au-btn au-btn-icon au-btn--green au-btn--small" data-toggle="modal" data-target="#modelId">
                    <i class="zmdi zmdi-plus"></i>Thêm Người Dùng</button>        
                </div>
              </div>

              <div className="table-responsive table-responsive-data2 row">
                <table className="table table-data2 col-md-12">
                  <thead>
                    <tr>
                      <th>Tài Khoản</th>
                      <th>Họ Tên</th>
                      <th>Email</th>
                      <th>Số Điện Thoại</th>
                      <th>Mã Người Dùng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {props.DSND.map((nguoidung, index) => {

                      return <Fragment key={index}>

                        <tr className="tr-shadow"  >
                          <td >{nguoidung.taiKhoan}</td>
                          <td>
                            <span className="status--process">{nguoidung.hoTen}</span>
                          </td>
                          <td > <span className="block-email">{nguoidung.email}</span> </td>
                          <td>{nguoidung.soDt}</td>
                          <td > <span className="admin role">{nguoidung.maLoaiNguoiDung}</span> </td>
                          <td>
                            <div className="table-data-feature">

                              <button className="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                <i className="zmdi zmdi-edit" />
                              </button>
                              <button className="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                <i className="zmdi zmdi-delete" />
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

export default connect(mapStateToProp, mapDispathToProps)(QuanLyThanhVien)