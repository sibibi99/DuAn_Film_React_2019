import * as types from "./constants";

const stateDefault = {
  isLogin: localStorage.getItem("isLogin")
    ? localStorage.getItem("isLogin")
    : false,
  DSND: [],
  Error: ''
};
const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case types.LAY_DANH_SACH_NGUOI_DUNG: {
      state.DSND = action.DSND;
      return { ...state };
    }
    // eslint-disable-next-line no-duplicate-case
    case types.XU_LY_ERROR: {
      state.Error = action.Error;
      return { ...state };
    }

    default:
  }
  return { ...state };
};

export default QuanLyNguoiDungReducer;
