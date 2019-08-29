import axios from 'axios';
import * as types from '../constants/QuanLyNguoiDung';
import * as config from '../../common/Config/Config';
import Swal from 'sweetalert2';


export const dangNhapAction = (nguoiDung, history) =>{
    return dispatch => {
        axios({
            url:config.domain + 'QuanLyNguoiDung/DangNhap',
            method:'POST',
            data:nguoiDung
        }).then(result =>{
            //Đăng nhập thành công sẽ lưu vào storage token và thông tin người dung
            localStorage.setItem(config.accessToken,result.data.accessToken);
            localStorage.setItem(config.userLogin, JSON.stringify(result.data))
            console.log(result.data.maLoaiNguoiDung);
    
            
            
            //if resul laf ==maloi khac hang thi day ra dang chu
            // neu la admin thi day ra quan tri
            if (result.data.maLoaiNguoiDung === 'QuanTri')
            {
                history.push('/admin') 
            } else {
                history.push('/') 
                }
                

            dispatch({
                type:types.DANG_NHAP,
                isLogin:true
            })
        }).catch(error=>{
            dispatch({
                type:types.DANG_NHAP,
                isLogin:false
            })
            // console.log(error.response.data);
        })
    }
}
export const dangKyAction = (nguoiDung, history) =>{
    return dispatch => {
        axios({
            url:config.domain + 'QuanLyNguoiDung/DangKy',
            method:'POST',
            data:nguoiDung
        }).then(result =>{
            // ĐAng Ký thành công sẻ chuyển sang trang Login
            history.push('/login')
        }).catch(error=>{
            dispatch({
                type:types.DANG_KY,
                isLogin:false
            })
            console.log(error.response.data);
        })
    }
}
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
                type:types.DANG_KY,
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


