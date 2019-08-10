import * as types from '../constants/QuanLyKhoaHoc';


const stateDefault = {
    DSKH: [],
    thongTinKhoaHoc:{}
}



const QuanLyKhoaHocReducer = (state = stateDefault, action) => {
    switch(action.type){
        case types.LAY_DANH_SACH_KHOA_HOC :{
            state.DSKH = action.DSKH;
            return {...state}
        }
        case types.LAY_CHI_TIET_KHOA_HOC:{
            state.thongTinKhoaHoc = action.thongTinKhoaHoc;
            return {...state}
        }
    }
    return {...state}
}

export default QuanLyKhoaHocReducer;