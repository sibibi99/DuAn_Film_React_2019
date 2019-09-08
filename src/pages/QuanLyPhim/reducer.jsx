import * as types from "./constants";

const stateDefault = {

    DSP: []
};
const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.LAY_DANH_SACH_PHIM: {
      state.DSP = action.DSP;
      return { ...state };
    }
    case types.THEM_PHIM: {
      state.DSP = action.DSP;
      return { ...state };
    }

    default:
  }
  return { ...state };
};

export default QuanLyPhimReducer;
