import axios from 'axios';
import * as types from './constants';
import * as config from '../../common/Config/Config'


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
            localStorage.setItem('nameId', result.data.hoTen)
            //if resul laf ==maloi khac hang thi day ra dang chu
            // neu la admin thi day ra quan tri
            if (result.data.maLoaiNguoiDung === 'QuanTri')
            {
                history.push('/admin') 
            } else {
                history.push('/') 
            }
            
            // console.log('Ho te la: ' + result.data.hoTen);
            dispatch({
                type:types.DANG_NHAP,
                isLogin:true,
                nameId: result.data.hoTen

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

// Kiem Tra Dang nhap khi F5
export const checkLogin = () => {
    let nameId = localStorage.getItem('nameId')
    return dispatch => {
        if(localStorage.getItem('userLogin')) {
            dispatch({
                type:types.DANG_NHAP,
                isLogin:true,  
                nameId : nameId              
            })
        } else {
            dispatch({
                type:types.DANG_NHAP,
                isLogin:false,
                
            })
        }
    }
    
}