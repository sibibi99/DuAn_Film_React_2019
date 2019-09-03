import React, { Fragment } from 'react';


export default function DanhSachThanhVien(props) {

  // Output Con truyen du lieu len cha
  const suaND = (nd) => {
    props.suaND(nd);
    // console.log(nd.taiKhoan);

  }
  const xoaND = (nd) => {
    props.xoaND(nd);
  }


  return (
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

                    <button
                      // Con day du lieu len cha
                      onClick={() => { suaND(nguoidung)}}
                      data-toggle="modal" data-target="#modelId" className="item" data-placement="top" >
                      <i className="zmdi zmdi-edit" />
                    </button>
                    <button
                      // Con day du lieu len cha
                      onClick={() => { xoaND(nguoidung.taiKhoan) }}
                      className="item" data-toggle="tooltip" data-placement="top" title="Delete">
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


  )
}
