import { combineReducers } from "redux";
import QuanLyNguoiDungReducer from "./pages/QuanLyThanhVien/reducer";
import QuanLyPhimReducer from "./pages/QuanLyPhim/reducer";
import LoginReducer from "./pages/Login/reducer";
import QuanLyHeThongRapReducer from './common/components/CumRap/reducer'
const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,QuanLyPhimReducer, LoginReducer, QuanLyHeThongRapReducer
});
export default rootReducer;
