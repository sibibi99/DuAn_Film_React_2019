import * as types from '../constants/QuanLyNguoiDung';

const stateDefault = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false
}
const QuanLyNguoiDungReducer = (state=stateDefault, action)=>{
    switch(action.type) {
        case types.DANG_NHAP :{
            state.isLogin = action.isLogin;
            return {...state}
        }
    }
    return {...state};
}


export default QuanLyNguoiDungReducer;