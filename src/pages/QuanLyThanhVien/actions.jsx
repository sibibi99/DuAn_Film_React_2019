import axios from "axios";
import * as types from "./constants";
import * as config from "../../common/Config/Config";
import { getAPI } from "../../common/utils/axios";
import Swal from "sweetalert2";



export const themNguoiDungAction = (nguoiDung, history, stateDefault) => {
  // console.log(nguoiDung);
  return dispatch => {
    let token = localStorage.getItem("accessToken");
    // console.log(token);

    axios({
      url: config.domain + "QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: nguoiDung,
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(result => {
        // Đóng Modal Lại
        // console.log(result);
        document.getElementById("nhapLai").click();
        document.getElementById("modalClose").click();

        // Văng SweetAler lên
        Swal.fire({
          type: "success",
          title: "Đăng Ký Thành Công",
          showConfirmButton: false,
          timer: 1500
        });
        // Refresh lai state
        dispatch(layDanhSachNguoiDungAction());
        // console.log('Them 0k');
        
      
      })
      .catch(error => {
        // Đưa lỗi ra form
        // console.log(error.response.data);
        dispatch({
          type: types.XU_LY_ERROR,
          Error: error.response.data

        })
      });
  };
};

export const suaNguoiDungAction = (nguoiDung, history, stateDefault) => {
  // console.log(nguoiDung);
  return dispatch => {
    let token = localStorage.getItem("accessToken");
    // console.log(token);

    axios({
      url: config.domain + "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "POST",
      data: nguoiDung,
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(result => {
        // Đóng Modal Lại
     
      })
      .catch(error => {
        // Đưa lỗi ra form
        // console.log(error.response.data);
       
      });
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async dispatch => {
    const url =
      config.domain + "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05";
    // Dùng try catch để bắt lỗi
    try {
      const result = await getAPI(url);
      dispatch({
        type: types.LAY_DANH_SACH_NGUOI_DUNG,
        DSND: result.data,
      });
    } catch (error) {
      // Call api fail sẽ nhảy vào đây
      console.log(error.response);
    }
  };
};
