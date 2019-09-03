import React from 'react'

export default function FormThemPhim() {
  return (
<div className="container">

<div className="card-body card-block">

  <form  method="" className="form-inline">

    <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Mã Phim</label>
      </div>
      <div className=" col-md-9 mt-2 ">
        <input type="text" name="maPhim" placeholder="Mã phim..." className="form-control w-100 " />
      </div>
    </div>
    {/* End */}
    <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Tên Phim</label>
      </div>
      <div className=" col-md-9 mt-2">
        <input type="password" name="tenPhim" placeholder="Tên phim..." className="form-control w-100 " />
      </div>
    </div>
        {/* End */}
    <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Hình Ảnh</label>
      </div>
      <div className=" col-md-9 mt-2">
        <input type="password" name="hinhAnh" placeholder="Link hình ảnh..." className="form-control w-100 " />
      </div>
    </div>
        {/* End */}
        <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Mô Tả</label>
      </div>
      <div className=" col-md-9 mt-2">
        <input type="password" name="moTa" placeholder="Mô tả ngắn..." className="form-control w-100 " />
      </div>
    </div>
        {/* End */}
        <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Trailer</label>
      </div>
      <div className=" col-md-9 mt-2">
        <input type="password" name="trailer" placeholder="Link trailer..." className="form-control w-100 " />
      </div>
    </div>
        {/* End */}
        <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Đánh Giá</label>
      </div>
      <div className=" col-md-9 mt-2">
        <input type="password" name="danhGia" placeholder="Đánh giá mấy sao..." className="form-control w-100 " />
      </div>
    </div>
        {/* End */}
        <div className="col-md-12 form-group">
      <div className="col-md-3">
        <label htmlFor="text-input" className=" form-control-label">Ngày Khởi Chiếu</label>
      </div>
      <div className=" col-md-9 mt-2">
        <input type="password" name="ngayKhoiChieu" placeholder="Ngày khởi chiếu..." className="form-control w-100 " />
      </div>
    </div>
        {/* End */}

    <div className="col-md-12">
      <h4 className='text-danger text-center'>Loi o day</h4>
    </div>
    <div className="modal-footer just justify-content-center mt-2 col-md-12 ">
      <button type="submit" className="au-btn au-btn-icon au-btn--green au-btn--small" >
        <i className="zmdi zmdi-plus" /> Thêm Phim Mới
</button>
    </div>
  </form>
</div>
</div>
  )
}
