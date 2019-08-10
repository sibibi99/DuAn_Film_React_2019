import axios from 'axios';
import * as types from '../constants/QuanLyNguoiDung';
import * as config from '../../common/Config/Config';



export const dangNhapAction = (nguoiDung) =>{
    return dispatch => {
        axios({
            url:config.domain + 'QuanLyNguoiDung/DangNhap',
            method:'POST',
            data:nguoiDung
        }).then(result =>{
            //Đăng nhập thành công sẽ lưu vào storage token và thông tin người dung
            localStorage.setItem(config.accessToken,result.data.accessToken);
            localStorage.setItem(config.userLogin, JSON.stringify(result.data))
            dispatch({
                type:types.DANG_NHAP,
                isLogin:true
            })
        }).catch(error=>{
            dispatch({
                type:types.DANG_NHAP,
                isLogin:false
            })
            console.log(error.response.data);
        })
    }
}


