import axios from 'axios';
import * as types from './constant';
import * as config from '../../common/Config/Config'
import Swal from 'sweetalert2';



export const themNguoiDungAction = (nguoiDung, history) =>{
    console.log(nguoiDung);
    return dispatch => {
        let token = localStorage.getItem('accessToken');
    console.log(token);
        
        axios({
            url:config.domain + 'QuanLyNguoiDung/ThemNguoiDung',
            method:'POST',
            data:nguoiDung,
            headers: {
            "Authorization": "Bearer "  + token     
            }
        }).then(result =>{
            // Đóng Modal Lại
            // Văng SweetAler lên
            Swal.fire({
                type: 'success',
                title: 'Đăng Ký Thành Công',
                showConfirmButton: false,
                timer: 1500
              })
            // Refresh lai state           
        }).catch(error=>{
            dispatch({
                type:types.THEM_NGUOI_DUNG,
                isLogin:false
            })
            // Đưa lỗi ra form
            console.log(error.response.data);
        })
    }
}
export const xoaNguoiDungAction = (nguoiDung) =>{
    console.log(nguoiDung);
    return dispatch => {
        let token = localStorage.getItem('accessToken');
        
        axios({
            url:config.domain + 'QuanLyNguoiDung/XoaNguoiDung',
            method:'DELETE',
            data:nguoiDung,
            headers: {
            "Authorization": "Bearer "  + token     
            }
        }).then(result =>{
            console.log(result);
            
            // Văng SweetAler lên
            Swal.fire({
                type: 'success',
                title: 'XOA Thành Công',
                showConfirmButton: false,
                timer: 1500
              })
            // Refresh lai state      
         
        }).catch(error=>{
            dispatch({
                // type:types.DANG_KY,
                // isLogin:false
            })
            // Đưa lỗi ra form
            console.log(error.response.data);
        })
    }
}
export const suaNguoiDungAction = (nguoiDung) =>{
    console.log(nguoiDung);
    return dispatch => {
        let token = localStorage.getItem('accessToken');
        
        axios({
            url:config.domain + 'QuanLyNguoiDung/XoaNguoiDung',
            method:'DELETE',
            data:nguoiDung,
            headers: {
            "Authorization": "Bearer "  + token     
            }
        }).then(result =>{
            // Đóng Modal Lại

            
         
        }).catch(error=>{
            dispatch({
                // type:types.DANG_KY,
                // isLogin:false
            })

            // Đưa lỗi ra form
            console.log(error.response.data);
        })
    }
}

export const layDanhSachNguoiDungAction = () =>{
    return dispatch => {
        axios({
            url:config.domain + 'QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05',
            method:'GET',

        }).then(result =>{
            // Lấy về danh sách người dùng
            // console.log(result.data);
            dispatch({
                type:types.LAY_DANH_SACH_NGUOI_DUNG,
                DSND:result.data
            })
            
        }).catch(error=>{
            // console.log(error.response.data);
        })
    }
}


