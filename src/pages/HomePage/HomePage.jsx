import React, { Component } from 'react'
import Slider from '../../common/components/Slider/Slider';
import LichChieu from '../../common/components/LichChieu/LichChieu';
import CumRap from '../../common/components/CumRap/CumRap';



export default class HomePage extends Component {

    render() {
        return (
            <div>

                <Slider/>
                <LichChieu/>
                <CumRap/>
            </div>
        )
    }
}
