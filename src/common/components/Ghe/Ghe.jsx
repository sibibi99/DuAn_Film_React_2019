import React, { Fragment, useState,useEffect } from 'react'
import './Ghe.css';
import { connect } from 'react-redux';
import { datGheAction } from '../../../redux/actions/QuanLyPhimActions';
function Ghe(props) {
    let { ghe } = props;
    let [state, setState] = useState({
        dangDat: false
    })

    const datVe = () => {
        setState({
            dangDat: !state.dangDat
        });
    }
    useEffect(() => {
        let gheDangDat = {
            maGhe: ghe.maGhe,
            stt: ghe.stt,
            giaVe: ghe.giaVe,
            dangDat: state.dangDat
        }
        props.datGhe(gheDangDat);
    }, [state]) //Khi  [tham số] thay đổi useEffect sẽ chạy lại
    const renderGhe = () => {
        if (ghe.daDat) {
            return (
                <button className="ghe gheDaDat" disabled>{ghe.stt}</button>
            )
        }
        else {
            if (state.dangDat) {
                return <button onClick={datVe} className="ghe gheDangDat">{ghe.stt}</button>
            } else {
                if (ghe.loaiGhe === 'Vip') {
                    return <button onClick={datVe} className="ghe gheVip">{ghe.stt}</button>
                }
                return <button onClick={datVe} className="ghe">{ghe.stt}</button>
            }
        }
    }
    return (
        <Fragment>
            {renderGhe()}
        </Fragment>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (gheDangDat) => {
            dispatch(datGheAction(gheDangDat));
        }
    }
}

export default connect(null, mapDispatchToProps)(Ghe)