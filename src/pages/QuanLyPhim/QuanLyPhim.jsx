import React, { Component } from 'react';
import { connect } from "react-redux";
import { layDanhSachPhimAction } from "./action";
import DanhSachPhim from './DanhSachPhim/DanhSachPhim';
import './QuanLyPhim.scss'
import FormThemPhim from '../../common/components/QuanLyPhim/FormThemPhim';


class QuanLyphim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiThem: true
    }
  }
  // Hàm Đổi Trạng Thái
  doiTrangThai = () => {
    this.setState({
      trangThaiThem : !this.state.trangThaiThem
    })
  }
  // Hàm Hiển THị Nút
  hienThiNut = () => {
    if(this.state.trangThaiThem === true) {
      return (
        <button
        className="au-btn au-btn-icon au-btn--green au-btn--small"
        data-toggle="modal"
        onClick = {() => {this.doiTrangThai()}}
        data-target="#modelId">
        <i className="zmdi zmdi-plus"></i>Thêm Phim
      </button>
      )} else {
        return (
          <button
          className="au-btn au-btn-icon btn-warning au-btn--small"
          data-toggle="modal"
          onClick = {() => {this.doiTrangThai()}}
          data-target="#modelId">
          <i className="zmdi zmdi-plus"></i>Đóng Lại
         </button>
        )
      }
  }
  // Hàm Hiển THị Form
  hienThiForm = () => {
    if(this.state.trangThaiThem === false) {
      return <FormThemPhim/>
    }
  }
  // Gọi Hàm Lấy dữ liệu
  componentDidMount() {
    this.props.layDanhSachPhim();
  }
  render() {
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
                <h1 className="title-1 m-b-35">Danh Sách Phim</h1>
                {/* // Goi Ham Hien Thi Form */}
                {this.hienThiForm()}

                <div className="table-data__tool">
                  <div className="table-data__tool-left col-md-6">
                    <div className="input-group ">
                      <input
                        type="email"
                        id="input2-group2"
                        name="input2-group2"
                        placeholder="Tìm người dùng"
                        className="form-control w-50"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-danger ml-2 ">Tìm Kiếm</button>
                      </div>
                    </div>
                  </div>
                  <div className="table-data__tool-right ">
                    {/* Hien Thi Nut */}
                    {this.hienThiNut()}
                  </div>
                </div>
                <DanhSachPhim DSP={this.props.DSP} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// Đưa dữ liệu trên Reducer xuống
const mapStateToProp = state => {
  console.log(state);

  return {
    DSP: state.QuanLyPhimReducer.DSP
  };
};
const mapDispathToProps = dispatch => {
  return {
    layDanhSachPhim: () => {
      dispatch(layDanhSachPhimAction());
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispathToProps
)(QuanLyphim);