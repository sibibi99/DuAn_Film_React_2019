import { combineReducers } from "redux";
import QuanLyNguoiDungReducer from "./pages/QuanLyThanhVien/reducer";
import QuanLyPhimReducer from "./pages/QuanLyPhim/reducer";
const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,QuanLyPhimReducer
});
export default rootReducer;
