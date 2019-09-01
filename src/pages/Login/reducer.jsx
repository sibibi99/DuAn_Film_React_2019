import * as types from './constant';

const stateDefault = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false,
    
}
const QuanLyDangNhapReducer = (state=stateDefault, action)=>{
    switch(action.type) {
        case types.DANG_NHAP :{
            state.isLogin = action.isLogin;
            return {...state}
        }

         default:
        
    }
    return {...state};
}


export default QuanLyDangNhapReducer;