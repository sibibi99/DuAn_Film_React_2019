import * as types from './constant';

const stateDefault = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false,
    DSND: []
}
const QuanLyNguoiDungReducer = (state=stateDefault, action)=>{
    switch(action.type) {
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