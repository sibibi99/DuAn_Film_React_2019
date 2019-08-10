import React from 'react';
import {NavLink} from 'react-router-dom';

export default function CourseItem(props) {

    let {maKhoaHoc,tenKhoaHoc,hinhAnh} = props.khoaHoc;
    console.log(props)
    return (
        <div className="card">
            <img className="card-img-top" src={hinhAnh} alt />
            <div className="card-body">
                <h4 className="card-title">{tenKhoaHoc}</h4>
                <NavLink to={`/coursedetails/${maKhoaHoc}`}> Xem chi tiết </NavLink>
            </div>
        </div>

    )
}
