import axios from 'axios';
import * as types from '../constants/QuanLyNguoiDung';
import * as config from '../../common/Config/Config';



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


