import React, { Component } from 'react'
import {connect} from 'react-redux';
import {layDanhSachKhoaHocAction} from '../../redux/actions/QuanLyKhoaHocActions';
import DanhSachKhoaHoc from '../../common/components/CourseList/CourseList';
class CourseList extends Component {

    componentDidMount(){
        this.props.layDanhSachKhoaHoc();
    }
    render() {
        return (
            <div className="container">
                <h3>Danh sách khóa học</h3>
                <DanhSachKhoaHoc DSKH={this.props.DSKH} ></DanhSachKhoaHoc>
            </div>
            
        )
    }
}
const mapStateToProp = (state) => {
    return {
        DSKH: state.QuanLyKhoaHocReducer.DSKH
    }
}
const mapDispatchToProp = (dispatch) =>{
    return {
        layDanhSachKhoaHoc:()=>{
            dispatch(layDanhSachKhoaHocAction())
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(CourseList)