import * as types from '../constants/QuanLyNguoiDung';

const stateDefault = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false,
    DSND: []
}
const QuanLyNguoiDungReducer = (state=stateDefault, action)=>{
    switch(action.type) {
        case types.DANG_NHAP :{
            state.isLogin = action.isLogin;
            return {...state}
        }
        case types.DANG_KY :{
            state.isLogin = action.isLogin;
            return {...state}
        }
        case types.LAY_DANH_SACH_NGUOI_DUNG :{
            state.DSND = action.DSND;
            return {...state}
        }
        case types.XOA_NGUOI_DUNG :{
            state.DSND = action.DSND;
            return {...state}
        }
        // case types.SUA_NGUOI_DUNG :{
        //     state.DSND = action.DSND;
        //     return {...state}
        // }
         default:
        
    }
    return {...state};
}


export default QuanLyNguoiDungReducer;