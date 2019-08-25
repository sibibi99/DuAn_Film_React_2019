import React from 'react';

export default function FormThemNguoiDung(props) {
  return (
    <div className="container">
    
        <div className="card-body card-block">
          <form action method="post" className="form-inline">
            <div className="form-group mb-4 col-md-6">
              <label htmlFor="exampleInputName2" className="px-2  form-control-label">Tài Khoản</label>
              <input type="text" id="exampleInputName2" placeholder="Tên tài khoản" required className="form-control" />
            </div>
            <div className="form-group mb-4 col-md-6">
              <label htmlFor="exampleInputName2" className="px-2  form-control-label">Mật Khẩu</label>
              <input type="password" id="exampleInputName2" placeholder="Tên tài khoản" required className="form-control" />
            </div>
            <div className="form-group mb-4 col-md-6">
              <label htmlFor="exampleInputName2" className="px-2  form-control-label">Họ Tên</label>
              <input type="text" id="exampleInputName2" placeholder="Tên tài khoản" required className="form-control" />
            </div>
            <div className="form-group mb-4 col-md-6">
              <label htmlFor="exampleInputName2" className="px-2  form-control-label">Email</label>
              <input type="text" id="exampleInputName2" placeholder="Tên tài khoản" required className="form-control" />
            </div>
 


          </form>
        </div>
        <div className="modal-footer just justify-content-start">
          <button type="submit" className="btn btn-success btn-sm">
            <i className="fa fa-user" /> Thêm Người Dùng
    </button>
          <button type="reset" className="btn btn-danger btn-sm">
            <i className="fa fa-ban" /> Nhập Lại
    </button>
        </div>
     

    </div>
  )
}
