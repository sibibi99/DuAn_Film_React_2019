import React from 'react'

export default function Rap() {
    return (
        <div>
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
    )
}
