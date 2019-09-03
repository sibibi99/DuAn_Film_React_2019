import React, { Component, Fragment } from 'react'

export default class DanhSachPhim extends Component {
  render() {
    return (
      <div className="table-responsive table-responsive-data2 ">
        <table className="table table-borderless table-data3">
          <thead>
            <tr>
              <th>Hình Ảnh</th>
              <th>Mã Phim</th>
              <th>Tên Phim</th>
              <th>Mô Tả</th>
              <th>Đánh Giá</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.DSP.map((phim, index) => {

              return <Fragment key={index}>

                <tr className="tr-shadow"  >
                  <td ><img alt='' className= 'hinhAnh' src={phim.hinhAnh}/></td>
                  <td><span>{phim.maPhim}</span></td>
                  <td><span>{phim.tenPhim}</span> </td>
                  <td><span>{phim.moTa}</span> </td>
                  <td><span>{phim.danhGia}</span></td>
                  <td>
                  <div className="table-data-feature">

                    <button
                      // Con day du lieu len cha
                      // onClick={() => { suaND(nguoidung) }}
                      data-toggle="modal" data-target="#modelId" className="item" data-placement="top" title="Sua người dùng" >
                      <i className="zmdi zmdi-edit" />
                    </button>
                    <button
                      // Con day du lieu len cha
                      // onClick={() => { xoaND(nguoidung.taiKhoan) }}
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
}
