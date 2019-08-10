import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { layChiTietPhim } from '../../redux/actions/QuanLyPhimActions';

function TrangChiTiet(props) {

    // let [state,setState] = useState({maPhim:''});

    useEffect(() => {
        //Lấy param từ url
        let { maPhim } = props.match.params;
        props.layChiTietPhim(maPhim);
        // setState({maPhim})
        console.log(props.chiTietPhim);
    },[])
    let { chiTietPhim } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={chiTietPhim.hinhAnh} className="mt-5" />
                </div>
                <div className="col-md-8">
                    <div className="mt-5">
                        <span className="display-4">{chiTietPhim.tenPhim}</span> <br />
                        <span>{chiTietPhim.moTa}</span>
                        <p>Ngày khởi chiếu: {chiTietPhim.ngayKhoiChieu}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="nav nav-tabs">
                    {chiTietPhim.heThongRapChieu ?
                        chiTietPhim.heThongRapChieu.map((htr, index) => {
                            if(index==0){

                               
                            return (
                                
                                <li key={index} className="nav-item active">
                                    <a className="nav-link" data-toggle="tab" href={`#${htr.maHeThongRap}`}>{htr.tenHeThongRap}</a>
                                </li>
                               
                            )
                            }else{
                                return (
                                
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href={`#${htr.maHeThongRap}`}>{htr.tenHeThongRap}</a>
                                    </li>
                                   
                                )
                            }
                        }) : ''}


                </ul>
                <div className="tab-content">
                    {
                        chiTietPhim.heThongRapChieu ? chiTietPhim.heThongRapChieu.map((htr, index) => {
                            if(index==0)
                            {
                            return <div key={index} className="tab-pane container active" id={htr.maHeThongRap}>
                                {/* {htr.tenHeThongRap} */}
                                {htr.cumRapChieu ? htr.cumRapChieu.map((cumRap, index) => {
                                    return(
                                        <div className="card text-left">
                                    
                                            <div className="card-body">
                                                <h4 className="card-title">{cumRap.tenCumRap}</h4>
                                                {cumRap.lichChieuPhim ? cumRap.lichChieuPhim.map((lichChieu,index)=>{
                                                    return (
                                                        <NavLink className="display-4 text-success" to={`/chi-tiet-phong-ve/${lichChieu.maLichChieu}`}> {lichChieu.ngayChieuGioChieu} </NavLink>
                                                    )
                                                }):''}
                                            </div>
                                        </div>
                                    )


                                }) : ''}
                            </div>
                            }else{
                                return <div key={index} className="tab-pane container" id={htr.maHeThongRap}>
                                {/* {htr.tenHeThongRap} */}
                                {htr.cumRapChieu ? htr.cumRapChieu.map((cumRap, index) => {
                                    return(
                                        <div className="card text-left">
                                    
                                            <div className="card-body">
                                                <h4 className="card-title">{cumRap.tenCumRap}</h4>
                                                {cumRap.lichChieuPhim ? cumRap.lichChieuPhim.map((lichChieu,index)=>{
                                                    return (
                                                        <NavLink className="display-4 text-success" to={`/chi-tiet-phong-ve/${lichChieu.maLichChieu}`}> {lichChieu.ngayChieuGioChieu} </NavLink>
                                                    )
                                                }):''}
                                            </div>
                                        </div>
                                    )


                                }) : ''}
                            </div>
                            }
                        }) : ''}


                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chiTietPhim: state.danhSachPhimReducer.chiTietPhim
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        layChiTietPhim: (maPhim) => {
            dispatch(layChiTietPhim(maPhim))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrangChiTiet)