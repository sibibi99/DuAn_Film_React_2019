import React, { Component } from 'react'
import Modal from '../../common/components/Modal/Modal';
import FormThemNguoiDung from '../../common/components/QuanLyNguoiDung/FormThemNguoiDung';
import Modal2 from '../../common/components/Modal/Modal2';

//1 Cách thể hiện của HOC
const ModalThemNguoiDung = Modal(FormThemNguoiDung);

export default class HomePage extends Component {

    render() {
        return (
            <div>
                {/* <button data-toggle="modal" data-target="#modelId">Thêm người dùng</button>
                <ModalThemNguoiDung />

                <Modal2 Component={FormThemNguoiDung} title="Thêm người dùng" /> <Modal2 Component={} prop... />  */}
            </div>
        )
    }
}
