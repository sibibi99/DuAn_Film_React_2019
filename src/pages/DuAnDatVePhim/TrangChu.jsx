import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import {NavLink} from 'react-router-dom';
function TrangChu(props) {

    // let [danhSachPhim,setDanhSachPhim] = useState([]);
    useEffect(() => {
        props.layDanhSachPhim();
    }, [props])
    return (
        <div className="container">
            <div className="row">
                {props.DanhSachPhim.map((phim, index) => {
                    return <div className="col-md-4" key={index}>
                        <div className=" card text-left">
                            <img className="card-img-top" src={phim.hinhAnh} alt='' />
                            <div className="card-body">
                                <h4 className="card-title">{phim.tenPhim}</h4>
                                <NavLink to={`/chi-tiet-phim/${phim.maPhim}`}  className="btn btn-success card-text">Chi tiết</NavLink>
                            </div>
                        </div>
                    </div>
                })}
            </div></div>
    )
}
const mapStateToProps = (state) => {
    return {
        DanhSachPhim: state.danhSachPhimReducer.DanhSachPhim
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        layDanhSachPhim: () => {
            dispatch(layDanhSachPhimAction());
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(TrangChu)