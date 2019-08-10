import * as types from '../constants/QuanLyKhoaHoc';
import axios from 'axios';



export const layDanhSachKhoaHocAction = () =>{
    return dispatch =>{
        axios({
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
            method:'GET'
        }).then(result =>{
            dispatch({
                type:types.LAY_DANH_SACH_KHOA_HOC,
                DSKH:result.data
            })
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
}

export const layThongTinKhoaHocAction = (maKhoaHoc) =>{
    return dispatch =>{
        axios({
            url:`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
            method:'GET'
        }).then(result =>{
            console.log(result.data);
            dispatch({
                type:types.LAY_CHI_TIET_KHOA_HOC,
                thongTinKhoaHoc:result.data
            })
        }).catch(error=>{
            console.log(error.response.data);
        })
    }
} 
