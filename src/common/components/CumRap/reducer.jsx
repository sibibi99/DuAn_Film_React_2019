import * as types from "./constant";

const stateDefault = {
    DSR: [],
    CUMRAP: [],
    MANGPHIM: []
};
const QuanLyHeThongRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.LAY_DANH_SACH_HE_THONG_RAP: {
      state.DSR = action.DSR;
      return { ...state };
    }
    case types.LAY_THONG_TIN_CUM_RAP: {
      state.CUMRAP = action.CUMRAP;
      state.LICHCHIEU = action.LICHCHIEU;
      return { ...state };
    }
    case types.LAY_MANG_PHIM: {
      state.MANGPHIM = action.MANGPHIM;
      return { ...state };
    }


    default:
  }
  return { ...state };
};

export default QuanLyHeThongRapReducer;
