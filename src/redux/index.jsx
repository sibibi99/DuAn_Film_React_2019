import {combineReducers} from 'redux';
import QuanLyKhoaHocReducer from './reducers/QuanLyKhoaHocReducer';
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer';
import danhSachPhimReducer from './reducers/QuanLyPhimReducer';
const rootReducer = combineReducers({
    QuanLyKhoaHocReducer,QuanLyNguoiDungReducer,danhSachPhimReducer
});
export default rootReducer;