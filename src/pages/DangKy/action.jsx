import axios from 'axios';
import * as types from './constants';
import * as config from '../../common/Config/Config'

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