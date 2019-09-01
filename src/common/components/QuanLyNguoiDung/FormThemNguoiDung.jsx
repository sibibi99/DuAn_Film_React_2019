import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { themNguoiDungAction } from '../../../pages/QuanLyThanhVien/actions'
// Emai Reular
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// Sau ky tu va khong co khaong trong
const userRegex = RegExp(/^\S{6,}$/);
//Phone number
const phoneNumber = RegExp(/(03|05|07|08|09)+([0-9]{8})\b/);




const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
}

class FormThemNguoiDung extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: null,
      matKhau: null,
      email: null,
      soDt: null,
      maNhom: 'GP05',
      maLoaiNguoiDung: '',
      hoTen: '',
      formErrors: {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        isOpen: false
      }
    };
  }

  //Modal Open/Close
  toggleModal = () => {
    // console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
      
    });
  }

  handleInput = (e) => {
    e.preventDefault();
    
    const {name, value} = e.target;
    // console.log("Name: ", name);
    // console.log("Value: ", value);

    let formErrors = this.state.formErrors;

    switch (name) {
      case 'taiKhoan':
        formErrors.taiKhoan = userRegex.test(value)  ? "" : 'Toi thieu 6 ky tu, khong co khoang trong';
        break;
      case 'matKhau':
          formErrors.matKhau = userRegex.test(value)  ? "" : 'Toi thieu 6 ky tu, khong co khoang trong';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? "" : 'Email Khong chinh xac';
        break;
      case 'soDt':
        formErrors.soDt = phoneNumber.test(value) ? "" : 'So Dien thoai khong chinh xac';
        break;
        default:
          break;
    } 


    this.setState({
      // [e.target.name]: e.target.value
      formErrors, [name]: value

    }, 
    // () => console.log(this.state)
    )
  }
  // Đẩy dữ liệu lên kèm History
  themNguoiDung = (e) => {

    e.preventDefault();

    if (formValid(this.state.formErrors)){
      console.log(`
      --SUBBMITTING--
      Tai khoan: ${this.state.taiKhoan}
      Mat Khau: ${this.state.matKhau}
      Email: ${this.state.email}
      So Dien Thoai: ${this.state.soDt}
      `);
    } else {
      // console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      
    }
    this.props.themNguoiDung(this.state, this.props.history);
  }

  render() {

    const {formErrors} = this.state;
    return (
      <div className="container">

        <div className="card-body card-block">

          <form onSubmit={this.themNguoiDung}  method="post" className="form-inline">

            <div className="col-md-12 form-group">
              <div className="col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Tài Khoản</label>
              </div>
              <div className=" col-md-9 mt-2 ">
                <input type="text"  name="taiKhoan" onChange={this.handleInput} placeholder="Tên tài khoản" className="form-control w-100 " />
                
                {formErrors.taiKhoan.length > 0 && (
                <small className="form-text text-danger mb-3">{formErrors.taiKhoan}</small>
              )}
            
              </div>
            </div>
            {/* End */}
            <div className="col-md-12 form-group">
              <div className="col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Mật Khẩu</label>
              </div>
              <div className=" col-md-9 mt-2">
                <input type="password"  name="matKhau" onChange={this.handleInput} placeholder="Password" className="form-control w-100 " />
                {formErrors.matKhau.length > 0 && (
                <small className="form-text text-danger mb-3">{formErrors.matKhau}</small>
              )}
              </div>
            </div>
            {/* End */}
            <div className="col-md-12 form-group">
              <div className="col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Tên Người Dùng</label>
              </div>
              <div className=" col-md-9 mt-2">
                <input type="text"  name="hoTen" onChange={this.handleInput} placeholder="Họ Và Tên" className="form-control w-100 " />
                <small className="form-text text-muted "></small>
              </div>
            </div>
            {/* End */}
            <div className="col-md-12 form-group">
              <div className="col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Email</label>
              </div>
              <div className=" col-md-9 mt-2">
                <input type="text"  name="email" onChange={this.handleInput} placeholder="Email" className="form-control w-100 " />
                {formErrors.email.length > 0 && (
                <small className="form-text text-danger mb-3">{formErrors.email}</small>
              )}
              </div>
            </div>
            {/* End */}
            <div className="col-md-12 form-group">
              <div className="col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Số Điện Thoại</label>
              </div>
              <div className=" col-md-9 mt-2">
                <input type="text"  name="soDt" onChange={this.handleInput} placeholder="Số Điện Thoại" className="form-control w-100 " />
                {formErrors.soDt.length > 0 && (
                <small className="form-text text-danger mb-3">{formErrors.soDt}</small>
              )}
              </div>
            </div>
            {/* End */}
            <div className="col-md-12 form-group my-2">
              <div className="col-md-3">
                <label htmlFor="text-input" className=" form-control-label">Loại Người Dùng</label>
              </div>
              <div className=" col-md-9">
                <select onChange={this.handleInput} id="select" name="maLoaiNguoiDung" class="form-control">
                  <option value="0">Vui lòng chọn</option>
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản Trị</option>
                </select>
              </div>
            </div>
            {/* End */}
            <div className="col-md-12">
              <h3 className='text-danger text-center'>Loi o day</h3>

            </div>
            <div className="modal-footer just justify-content-center mt-2 col-md-12 ">
              <button type="submit" className="btn btn-success btn-sm" onClick={() => this.toggleModal()}>
                <i className="fa fa-user" /> Thêm Người Dùng
              </button>
              <button type="reset" id='nhapLai' className="btn btn-danger btn-sm">
                <i className="fa fa-ban" /> Nhập Lại
              </button>
            </div>

          </form>
        </div>



      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themNguoiDung: (nguoiDung, history) => {
      dispatch(themNguoiDungAction(nguoiDung, history));
    }
  }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(FormThemNguoiDung)