import { combineReducers } from "redux";
import QuanLyNguoiDungReducer from "./pages/QuanLyThanhVien/reducer";
import QuanLyPhimReducer from "./pages/QuanLyPhim/reducer";
import LoginReducer from "./pages/Login/reducer"
const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,QuanLyPhimReducer, LoginReducer
});
export default rootReducer;
