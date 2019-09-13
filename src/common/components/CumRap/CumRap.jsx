import React, { Component, Fragment } from 'react';
import './CumRap.scss';
import { connect } from "react-redux";
import { layDanhSachHeThongRapAction, layThongTinCumRapAction } from './action'


class CumRap extends Component {
  // Gọi Hàm Lấy dữ liệu
  componentDidMount() {
    this.props.layDanhSachHeThongRap();
    this.props.layThongTinCumRap('BHDStar')
  }
  
  render() {
    let dsPhim = [];
    return (
      <section className='cumrap'>
        <div className="cumrap__content">
          <div className="row table my-4">
            <div className="col-md-2 cumrap__content--hethongrap">
              {/* Lay He thong rap */}
              {this.props.DSR.map((rap, index) => {
                return (
                  <li key={index}>
                    <img src={rap.logo} alt="" onClick={() => { this.props.layThongTinCumRap(rap.maHeThongRap) }} />
                  </li>
                )
              })}
            </div>
            {/* Lay Cum Rap */}
            {this.props.CUMRAP.map((cumrap, index) => {
              return (<Fragment>
                <div className="col-md-4 cumrap__content--cumrap">
                  <ul key={index} onClick={() => { this.props.layThongTinLichChieu(cumrap.maHeThongRap) }}>
                    {cumrap.lstCumRap.map((list, index) => {
                      // Duyet listCumRap
                      return (
                        <div key={index} onClick = {(dsPhim) => {this.props.layPhim(list.danhSachPhim)}}>
                          <strong> {list.tenCumRap} </strong>
                          <p> {list.diaChi} </p>
                          {/* <p>{list.danhSachPhim}</p> */}
                          <hr className='br' />
                        </div>
                      )
                    })}
                  </ul>
                </div>
                <div className="col-md-6">
                {/* Đổ dsPhim ra đây */}
                </div>
              </Fragment>
              )
            })}
          </div>
        </div>

      </section>
    )
  }
}

// Đưa dữ liệu trên Reducer xuống
const mapStateToProp = state => {
  // console.log(state.QuanLyHeThongRapReducer.CUMRAP);

  return {
    DSR: state.QuanLyHeThongRapReducer.DSR,
    CUMRAP: state.QuanLyHeThongRapReducer.CUMRAP,
    LICHCHIEU: state.QuanLyHeThongRapReducer.LICHCHIEU
  };
};
const mapDispathToProps = dispatch => {
  return {
    layDanhSachHeThongRap: () => {
      dispatch(layDanhSachHeThongRapAction());
    },
    layThongTinCumRap: (maHeThongRap) => {
      dispatch(layThongTinCumRapAction(maHeThongRap));
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispathToProps
)(CumRap);