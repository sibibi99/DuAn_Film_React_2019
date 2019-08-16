import React, { Component } from 'react'
import Modal from '../../common/components/Modal/Modal';
import FormThemNguoiDung from '../../common/components/QuanLyNguoiDung/FormThemNguoiDung';
import Modal2 from '../../common/components/Modal/Modal2';
import Slider from '../../common/components/Slider/Slider';
import LichChieu from '../../common/components/LichChieu/LichChieu';
import CumRap from '../../common/components/CumRap/CumRap';
import CourseList   from '../../common/components/CourseList/CourseList'
import Test from '../../common/components/Test/Test';

//1 Cách thể hiện của HOC
const ModalThemNguoiDung = Modal(FormThemNguoiDung);

export default class HomePage extends Component {

    render() {
        return (
            <div>

                <Slider/>
                <LichChieu/>
                <Test/>
                <CumRap/>
                {/* <button data-toggle="modal" data-target="#modelId">Thêm người dùng</button>
                <ModalThemNguoiDung />
                <Modal2 Component={FormThemNguoiDung} title="Thêm người dùng" /> <Modal2 Component={} prop... />  */}
            </div>
        )
    }
}
