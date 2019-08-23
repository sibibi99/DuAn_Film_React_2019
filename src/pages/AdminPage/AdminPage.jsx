import React, { Component } from 'react';
import './AdminPage.scss'

export default class AdminPage extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="section__content section__content--p30">
          <div className="container-fluid">
            <div className="row m-t-25">
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c1">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-account-o" />
                      </div>
                      <div className="text">
                        <h2>10</h2>
                        <span>Số Thành Viên</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c2">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-shopping-cart" />
                      </div>
                      <div className="text">
                        <h2>88</h2>
                        <span>Số Vé Đã Bán</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c3">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-calendar-note" />
                      </div>
                      <div className="text">
                        <h2>1,086</h2>
                        <span>Số Người Dùng</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="overview-item overview-item--c4">
                  <div className="overview__inner">
                    <div className="overview-box clearfix">
                      <div className="icon">
                        <i className="zmdi zmdi-money" />
                      </div>
                      <div className="text">
                        <h2>300K</h2>
                        <span>Doanh Số Bán Vé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="au-card recent-report">
                  <div className="au-card-inner">
                    <h3 className="title-2">Đăng Ký/Mua Vé</h3>
                    <div className="chart-info">
                      <div className="chart-info__left">
                        <div className="chart-note">
                          <span className="dot dot--blue" />
                          <span>products</span>
                        </div>
                        <div className="chart-note mr-0">
                          <span className="dot dot--green" />
                          <span>services</span>
                        </div>
                      </div>
                      <div className="chart-info__right">
                        <div className="chart-statis">
                          <span className="index incre">
                            <i className="zmdi zmdi-long-arrow-up" />25%</span>
                          <span className="label">products</span>
                        </div>
                        <div className="chart-statis mr-0">
                          <span className="index decre">
                            <i className="zmdi zmdi-long-arrow-down" />10%</span>
                          <span className="label">services</span>
                        </div>
                      </div>
                    </div>
                      <div><h1>CHART</h1></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="au-card chart-percent-card">
                  <div className="au-card-inner">
                    <h3 className="title-2 tm-b-5">Lượt Xem/Comment</h3>
                    <div className="row no-gutters">
                      <div className="col-xl-6">
                        <div className="chart-note-wrap">
                          <div className="chart-note mr-0 d-block">
                            <span className="dot dot--blue" />
                            <span>products</span>
                          </div>
                          <div className="chart-note mr-0 d-block">
                            <span className="dot dot--red" />
                            <span>services</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <h1>CHART</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title-1 m-b-25">Danh Sách Đặt Vé</h2>
                <div className="table-responsive table--no-card m-b-40">
                  <table className="table table-borderless table-striped table-earning">
                    <thead>
                      <tr>
                        <th>date</th>
                        <th>order ID</th>
                        <th>name</th>
                        <th className="text-right">price</th>
                        <th className="text-right">quantity</th>
                        <th className="text-right">total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2018-09-29 05:57</td>
                        <td>100398</td>
                        <td>iPhone X 64Gb Grey</td>
                        <td className="text-right">$999.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$999.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-28 01:22</td>
                        <td>100397</td>
                        <td>Samsung S8 Black</td>
                        <td className="text-right">$756.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$756.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-27 02:12</td>
                        <td>100396</td>
                        <td>Game Console Controller</td>
                        <td className="text-right">$22.00</td>
                        <td className="text-right">2</td>
                        <td className="text-right">$44.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-26 23:06</td>
                        <td>100395</td>
                        <td>iPhone X 256Gb Black</td>
                        <td className="text-right">$1199.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$1199.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-25 19:03</td>
                        <td>100393</td>
                        <td>USB 3.0 Cable</td>
                        <td className="text-right">$10.00</td>
                        <td className="text-right">3</td>
                        <td className="text-right">$30.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-29 05:57</td>
                        <td>100392</td>
                        <td>Smartwatch 4.0 LTE Wifi</td>
                        <td className="text-right">$199.00</td>
                        <td className="text-right">6</td>
                        <td className="text-right">$1494.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-24 19:10</td>
                        <td>100391</td>
                        <td>Camera C430W 4k</td>
                        <td className="text-right">$699.00</td>
                        <td className="text-right">1</td>
                        <td className="text-right">$699.00</td>
                      </tr>
                      <tr>
                        <td>2018-09-22 00:43</td>
                        <td>100393</td>
                        <td>USB 3.0 Cable</td>
                        <td className="text-right">$10.00</td>
                        <td className="text-right">3</td>
                        <td className="text-right">$30.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
            </div>
            
            <div className="row">
              <div className="col-md-12">
                <div className="copyright">
                  <p>Copyright © 2019 by Si.NgSang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
