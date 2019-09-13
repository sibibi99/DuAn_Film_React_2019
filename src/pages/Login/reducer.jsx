import * as types from './constants';

const stateDefault = {
    isLogin: localStorage.getItem('isLogin') ? 
    localStorage.getItem('isLogin') : false,
    nameId: ''
    
}
const QuanLyDangNhapReducer = (state=stateDefault, action)=>{
    switch(action.type) {
        case types.DANG_NHAP :{
            state.isLogin = action.isLogin;
            state.nameId = action.nameId;
            return {...state}
        }
         default: 
    }
    return {...state};
}


export default QuanLyDangNhapReducer;