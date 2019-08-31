// import React, { useEffect, Fragment } from 'react';
// import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyPhimActions';
// import { connect } from 'react-redux';
// import Ghe from '../../common/components/Ghe/Ghe';
// import { datVeAction } from '../../redux/actions/QuanLyPhimActions';
// function TrangDatVe(props) {

//     useEffect(() => {
//         //Lấy tham số lịch chiếu từ url
//         let { maLichChieu } = props.match.params;
//         props.layChiTietPhongVe(maLichChieu);
//         console.log(props.thongTinLichChieuPhim);
//     }, [props])
//     const datVe = () => {
//         if (props.danhSachGheDangDat.length > 0) {
//             let {maLichChieu} = props.match.params;
//             let thongTinDatVe = {
//                 "maLichChieu": maLichChieu,
//                 "danhSachVe": props.danhSachGheDangDat,

//                 "taiKhoanNguoiDung": JSON.parse(localStorage.getItem('userLogin')).taiKhoan
//             }
//             props.datVe(thongTinDatVe);
//             //Gọi lại api load lại phòng vé
//             props.layChiTietPhongVe(maLichChieu);
//         } else {
//             alert('Bạn chưa chọn ghế!');
//         }
//     }
//     let { thongTinLichChieuPhim } = props;
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-8">
//                     {/* Load danh sách ghế */}{thongTinLichChieuPhim.danhSachGhe ? thongTinLichChieuPhim.danhSachGhe.map((ghe, index) => {
//                         return (
//                             <Fragment key={index}>
//                                 <Ghe ghe={ghe} />
//                                 {(index + 1) % 16 === 0 ? <br /> : ''}
//                             </Fragment>
//                         )
//                     }) : ''}
//                 </div>
//                 <div className="col-md-4">
//                     <h3>Danh sách ghế đang đặt</h3>
//                     {/* Load thông tin phim */}
//                     {props.danhSachGheDangDat.map((gheDangDat, index) => {
//                         return <Fragment key={index}>
//                             <span className="text-danger"> {gheDangDat.stt}</span>
//                         </Fragment>
//                     })}
//                     - {props.danhSachGheDangDat.reduce((tongTien, ghe, index) => {
//                         return tongTien + ghe.giaVe;
//                     }, 0).toLocaleString()}
//                     <div className="text-left">
//                         <button onClick={datVe} className="btn btn-success">Đặt vé</button>
//                     </div>
//                 </div>

//             </div>


//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         thongTinLichChieuPhim: state.danhSachPhimReducer.thongTinLichChieuPhim,
//         danhSachGheDangDat: state.danhSachPhimReducer.danhSachGheDangDat
//     } //Kết nối với redux lấy thông tin phòng vé về
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         layChiTietPhongVe: (maLichChieu) => {
//             dispatch(layChiTietPhongVeAction(maLichChieu));
//         },
//         datVe: (thongTinDatVe) => {
//             dispatch(datVeAction(thongTinDatVe))
//         }
//     }
// } //Gọi ajax đến action lấy thông tin phòng vé từ api

// export default connect(mapStateToProps, mapDispatchToProps)(TrangDatVe);