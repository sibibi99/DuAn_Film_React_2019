import * as types from "./constant";
import axios from "axios";
import * as config from "../../Config/Config";
import { getAPI } from "../../utils/axios";
import Swal from "sweetalert2";


export const layDanhSachHeThongRapAction = () => {
  return async dispatch => {
    const url =
      config.domain + "QuanLyRap/LayThongTinHeThongRap";
    // Dùng try catch để bắt lỗi
    try {
      const result = await getAPI(url);
      // console.log(result.data);      
      
      dispatch({
        type: types.LAY_DANH_SACH_HE_THONG_RAP,
        DSR: result.data,
      
        
      });
    } catch (error) {
      // Call api fail sẽ nhảy vào đây
      // console.log(error.response);
    }
  };
};
export const layThongTinCumRapAction = (maHeThongRap) => {
  return async dispatch => {
    const url = 
      config.domain + "QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=" + maHeThongRap;
    
      
    // Dùng try catch để bắt lỗi
    try {
      const result = await getAPI(url);
      console.log(result.data);      
      
      dispatch({
        type: types.LAY_THONG_TIN_CUM_RAP,
        CUMRAP: result.data,
      
        
      });
    } catch (error) {
      // Call api fail sẽ nhảy vào đây
      // console.log(error.response);
    }
  };
};

