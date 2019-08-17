import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './Test.scss';
// import './LichChieu.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ItemPhim from '../ItemPhim/ItemPhim';

export default function Test() {
  return (
    <section className='test'>
      <Tabs
        className='test__contain'
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList className='test__menu'>
          <Tab tabFor="one">Dang Chieu</Tab>
          <Tab tabFor="two">Sap Chieu</Tab>
        </TabList>
        <TabPanel tabId="one">
          <div className="lichchieu__content">

            <OwlCarousel
              dots={false}
              nav={true}
              autoplay
              loop
              items={4}
              margin={10}
            // responsiveClass = {true}

            >
              <ItemPhim />
              <ItemPhim />
              <ItemPhim />
              <ItemPhim />

            </OwlCarousel>


          </div>
        </TabPanel>
        <TabPanel tabId="two">
          <p>Tab 2 content</p>
        </TabPanel>
      </Tabs>

    </section>
  )
}
