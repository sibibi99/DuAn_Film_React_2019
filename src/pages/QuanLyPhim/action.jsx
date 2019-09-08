import * as types from "./constants";
import axios from "axios";
import * as config from "../../common/Config/Config";
import { getAPI } from "../../common/utils/axios";
import Swal from "sweetalert2";


export const layDanhSachPhimAction = () => {
  return async dispatch => {
    const url =
      config.domain + "QuanLyPhim/LayDanhSachPhim?MaNhom=GP05";
    // Dùng try catch để bắt lỗi
    try {
      const result = await getAPI(url);
      dispatch({
        type: types.LAY_DANH_SACH_PHIM,
        DSP: result.data
      });
    } catch (error) {
      // Call api fail sẽ nhảy vào đây
      // console.log(error.response);
    }
  };
};

export const themPhimAction = (phim) => {

  return dispatch => {
    let token = localStorage.getItem("accessToken");
    axios({
      url: config.domain + "QuanLyPhim/ThemPhim",
      method: "POST",
      data: phim,
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(result => {
      // Đóng Form Lại Lại
      document.getElementById("reset").click();

        // Văng SweetAler lên
        Swal.fire({
          type: "success",
          title: "Thêm Phim Thành Công",
          showConfirmButton: false,
          timer: 1500
        });
        // Refresh lai state
        dispatch(layDanhSachPhimAction());
        console.log('Them 0k');
      
      
    
    })
    .catch(error => {
      // Đưa lỗi ra form
      console.log(error.response.data);
      
    });
  };
};