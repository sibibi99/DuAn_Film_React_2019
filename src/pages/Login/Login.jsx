import React, { Component } from 'react'
import {connect} from 'react-redux';
import {dangNhapAction} from '../../redux/actions/QuanLyNguoiDungActions';
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
    dangNhap = (e)=>{
        e.preventDefault();
        this.props.dangNhap(this.state);
    }
    render() {
        return (
            <form onSubmit={this.dangNhap} className="container">
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
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dangNhap:(nguoiDung) =>{
            dispatch(dangNhapAction(nguoiDung));
        }
    }
}

export default connect(null,mapDispatchToProps)(Login)