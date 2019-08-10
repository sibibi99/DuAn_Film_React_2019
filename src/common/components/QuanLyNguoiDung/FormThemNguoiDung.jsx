import React from 'react'

export default function FormThemNguoiDung(props) {
    return (
        <div className="container">
            <h3>{props.title}</h3>
            <form>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input name="taiKhoan" className="form-control" />
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input name="matKhau" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Thêm người dùng</button>
                </div>
            </form>
        </div>
    )
}
