import axios from 'axios';



export const layDanhSachPhimAction = ()=>{
    return dispatch =>{
        axios({
            method:'GET',
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        }).then(result=>{
            dispatch({
                type:'LAY_DANH_SACH_PHIM',
                DanhSachPhim:result.data
            })
        }).catch(error =>{
            console.log(error.response.data)
        })
    }
}

export const layChiTietPhim = (maPhim) =>{
    return dispatch =>{
        axios({
            method:'GET',
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        }).then(result=>{
            dispatch({
                type:'LAY_CHI_TIET_PHIM',
                chiTietPhim:result.data
            })
        }).catch(error =>{
            console.log(error.response.data)
        })
    }
}

export const layChiTietPhongVeAction = (maLichChieu) =>{
    return dispatch =>{
        axios({
            method:'GET',
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}
            `,
        }).then(result=>{
            
            dispatch({
                type:'LAY_THONG_TIN_LICH_CHIEU',
                thongTinLichChieuPhim:result.data
            })
        }).catch(error =>{
            console.log(error.response.data)
        })
    }
}


export const datGheAction = (gheDangDat)=>{
    return {
        type:'DAT_GHE',
        gheDangDat
    }
}


export const datVeAction = (thongTinDatVe) =>{
    return dispatch =>{
        axios({
            method:'POST',
            url:'http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe'
            ,
            data:thongTinDatVe,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }).then(result=>{
            dispatch({
                type:'DAT_VE'
            })
            alert(result.data);
        }).catch(error =>{
            console.log(error.response.data)
        })
    }
}