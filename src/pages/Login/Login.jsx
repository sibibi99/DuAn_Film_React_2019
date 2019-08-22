import React, { Component } from 'react'
import {connect} from 'react-redux';
import {dangNhapAction} from '../../redux/actions/QuanLyNguoiDungActions';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import '../../Assets/css/theme.css'


 class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan:'',
            matKhau:''
        }
    }
    handleInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // Đẩy dữ liệu lên kèm History
    dangNhap = (e)=>{
        e.preventDefault();
        this.props.dangNhap(this.state, this.props.history);
    }
    render() {
        return (
            <div className="login">

            <form onSubmit={this.dangNhap} className="login__content">
                <h3>Đăng nhập</h3>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input className="form-control" name="taiKhoan" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input className="form-control" name="matKhau" onChange={this.handleInput} />
                </div>
                <button>Đăng nhập</button>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dangNhap: (nguoiDung, history) => {
            dispatch(dangNhapAction(nguoiDung, history));
        }
    }
}

export default compose(withRouter, connect(null,mapDispatchToProps))(Login)

