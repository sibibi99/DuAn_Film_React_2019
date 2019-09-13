import * as types from "./constants";

const stateDefault = {
  DSND: [],
  Error: ''
};
const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.LAY_DANH_SACH_NGUOI_DUNG: {
      state.DSND = action.DSND;
      return { ...state };
    }
    case types.XU_LY_ERROR: {
      state.Error = action.Error;
      return { ...state };
    }
  
    default:
  }
  return { ...state };
};

export default QuanLyNguoiDungReducer;
