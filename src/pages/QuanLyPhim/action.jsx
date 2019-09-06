import * as types from "./constants";
import axios from "axios";
import * as config from "../../common/Config/Config";
import { getAPI } from "../../common/utils/axios";

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
  console.log(phim);
  return dispatch => {
    let token = localStorage.getItem("accessToken");
    // console.log(token);

  };
};