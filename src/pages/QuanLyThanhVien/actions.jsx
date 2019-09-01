import axios from "axios";
import * as types from "./constants";
import * as config from "../../common/Config/Config";
import { getAPI } from "../../common/utils/axios";
import Swal from "sweetalert2";

export const themNguoiDungAction = (nguoiDung, history) => {
  console.log(nguoiDung);
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
      })
      .catch(error => {
        dispatch({
          // type:types.THEM_NGUOI_DUNG,
          // isLogin:false
        });
        // Đưa lỗi ra form
        // console.log(error.response.data);
      });
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async dispatch => {
    const url =
      config.domain + "QuanLyNguoiDung/LayDanhSachNguoiung?MaNhom=GP05";
    // Dùng try catch để bắt lỗi
    try {
      const result = await getAPI(url);
      dispatch({
        type: types.LAY_DANH_SACH_NGUOI_DUNG,
        DSND: result.data
      });
    } catch (error) {
      // Call api fail sẽ nhảy vào đây
      console.log(error.response);
    }
  };
};
