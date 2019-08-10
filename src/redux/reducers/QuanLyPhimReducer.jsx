
const stateDefault = {
    DanhSachPhim:[],
    chiTietPhim:{},
    thongTinLichChieuPhim:{},
    danhSachGheDangDat:[]
}

const danhSachPhimReducer = (state=stateDefault,action) =>{
    switch(action.type)
    {
        case 'LAY_DANH_SACH_PHIM': {
            state.DanhSachPhim = action.DanhSachPhim;
            return {...state}
        }
        case 'LAY_CHI_TIET_PHIM':{
            state.chiTietPhim = action.chiTietPhim;
            return {...state};
        }
        case 'LAY_THONG_TIN_LICH_CHIEU':{
            state.thongTinLichChieuPhim = action.thongTinLichChieuPhim;
            return {...state}
        }
        case 'DAT_GHE':{
        
            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            if(action.gheDangDat.dangDat) //Xử lý dangDat = true
            {
                dsGheDangDatUpdate.push(action.gheDangDat);
            }else {
                dsGheDangDatUpdate = dsGheDangDatUpdate.filter(gheDangDat => gheDangDat.maGhe !== action.gheDangDat.maGhe);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;
            console.log(state.danhSachGheDangDat);
            return {...state}
        }
    }
    return {...state}
}

export default danhSachPhimReducer;