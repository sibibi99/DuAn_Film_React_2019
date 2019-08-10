import React, { Component } from 'react';
import {connect} from 'react-redux';
import {layThongTinKhoaHocAction} from '../../redux/actions/QuanLyKhoaHocActions';

 class CourseDetails extends Component {


    componentDidMount(){
        this.props.layThongTinKhoaHoc(this.props.match.params.courseid);
    }
    render() {
        let {courseid} = this.props.match.params; //Đối tượng nhận tham số từ route giống activated route angular 

        return (
            <div>
                    <img src={this.props.thongTinKhoaHoc.hinhAnh} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        thongTinKhoaHoc: state.QuanLyKhoaHocReducer.thongTinKhoaHoc
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        layThongTinKhoaHoc: (maKhoaHoc) =>{
            dispatch(layThongTinKhoaHocAction(maKhoaHoc));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseDetails);