import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { dangKyAction } from '../../redux/DangKyDangNhap/action';
import './DangKy.scss'
class DangKy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
            hoTen: ''
        }
    }
    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }
    // Đẩy dữ liệu lên kèm History
    dangKy = (e) => {
        e.preventDefault();
        this.props.dangKy(this.state, this.props.history);
    }
    render() {
        return (
            <div className="login">

                <form onSubmit={this.dangKy} className="login__content">
                    <h3>Đăng nhập</h3>
                    <div className="form-group">
                        <span>Tài khoản</span>
                        <input className="form-control" name="taiKhoan" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <span>Email</span>
                        <input className="form-control" name="email" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <span>So Dien Thoai</span>
                        <input className="form-control" name="soDt" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <span>Ma Nhom</span>
                        <input className="form-control" name="maNhom" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <span>Ma Loai Nguoi Dung</span>
                        <input className="form-control" name="maLoaiNguoiDung" onChange={this.handleInput} />

                        {/* <select name='maLoaiNguoiDung' onChange={this.handleInput}>
                            <option value="QuanTri">Quan Tri</option>
                            <option value="KhachHang" >Khach hang</option>
                        </select> */}
                    </div>
                    <div className="form-group">
                        <span>Mật khẩu</span>
                        <input className="form-control" name="matKhau" onChange={this.handleInput} />
                    </div>
                    <button>Đăng Ky</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangKy: (nguoiDung, history) => {
            dispatch(dangKyAction(nguoiDung, history));
        }
    }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(DangKy)