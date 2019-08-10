import React from 'react'
import CourseItem from './CourseItem/CourseItem';

export default function CourseList(props) {
    return (
        <div className="container">
            <div className="row">
                {props.DSKH.map((khoaHoc, index) => {
                    return (
                        <div className="col-md-3" key={index}>
                            <CourseItem khoaHoc={khoaHoc} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
