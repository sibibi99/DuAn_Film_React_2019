import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './LichChieu.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ItemPhim from '../ItemPhim/ItemPhim';
import ItemPhim2 from '../ItemPhim/ItemPhim2';

export default class LichChieu extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  }

componentDidMount (){
  
}


render() {
  
  let MenuButton = document.getElementsByClassName('rwt__tab');
  console.log(MenuButton);





    return (
      <section className='lichchieu'>
        <Tabs
          className='lichchieu__content'
          defaultTab="one"
          onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList className='lichchieu__menu'>
            <Tab tabFor="one">Dang Chieu</Tab>
            <Tab tabFor="two">Sap Chieu</Tab>
          </TabList>
          <TabPanel tabId="one">
            <div className="lichchieu__item">
              <OwlCarousel className={'owl-theme'}
                loop={true}
                margin={10}
                nav={true}
                dots={false}
                autoplay
                autoplayTimeout={1000}
                items={4}
                responsive={this.state.responsive}
              >
                <ItemPhim className={'item'} />
                <ItemPhim className={'item'} />
                <ItemPhim className={'item'} />
                <ItemPhim className={'item'} />
                <ItemPhim className={'item'} />
                <ItemPhim className={'item'} />
                <ItemPhim className={'item'} />

              </OwlCarousel>

            </div>
          </TabPanel>
          <TabPanel tabId="two">
          <div className="lichchieu__item">
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
                <ItemPhim2 className={'item'} />
                <ItemPhim2 className={'item'} />
                <ItemPhim2 className={'item'} />
                <ItemPhim2 className={'item'} />
                <ItemPhim2 className={'item'} />
                <ItemPhim2 className={'item'} />
                <ItemPhim2 className={'item'} />

              </OwlCarousel>

            </div>
          </TabPanel>
        </Tabs>

      </section>
    )
  }
}
