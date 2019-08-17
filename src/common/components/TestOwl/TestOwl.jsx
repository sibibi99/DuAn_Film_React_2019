import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ItemPhim from '../ItemPhim/ItemPhim';

export default class TestOwl extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  }
  render() {
    return (
      <OwlCarousel className={'owl-theme'}
        loop={true}
        margin={10}
        nav={true}
        dots={false}
        autoplay={true}
        autoplayTimeout={2000}
        items={4}
        responsive={this.state.responsive} 
        >
          <ItemPhim className={'item'}/>

      </OwlCarousel>
    )
  }
}
