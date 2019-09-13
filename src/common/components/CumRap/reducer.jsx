import * as types from "./constant";

const stateDefault = {
    DSR: [],
    CUMRAP: [],
    LICHCHIEU: []
};
const QuanLyHeThongRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.LAY_DANH_SACH_HE_THONG_RAP: {
      state.DSR = action.DSR;
      return { ...state };
    }
    case types.LAY_THONG_TIN_CUM_RAP: {
      state.CUMRAP = action.CUMRAP;
      return { ...state };
    }
    case types.LAY_THONG_TIN_LICH_CHIEU: {
      state.LICHCHIEU = action.LICHCHIEU;
      return { ...state };
    }


    default:
  }
  return { ...state };
};

export default QuanLyHeThongRapReducer;
