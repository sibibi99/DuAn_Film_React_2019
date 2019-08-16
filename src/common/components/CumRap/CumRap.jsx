import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../CumRap/CumRap.scss";
import BHD from "../../../Assets/img/bhd.png";
import galaxycine from "../../../Assets/img/galaxycine.png";
import megags from "../../../Assets/img/megags.png";
import bt from "../../../Assets/img/bt.jpg";
import dongdacinema from "../../../Assets/img/dongdacinema.png";
import Rap from "./Rap/Rap";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

export default function CumRap() {
  return (
    <section className="cumrap">
      <div className="cumrap__content">
        <h1 className="cumrap__title">CỤM RẠP</h1>

        <Tabs forceRenderTabPanel defaultIndex={0}>
          {/* Cap 1 - CUM RAP*/}
          <TabList className="cumrap__icon">
          <Tab className='cumrap__img'><img src={BHD} /></Tab>
          <Tab className='cumrap__img'><img src={BHD} /></Tab>
          <Tab className='cumrap__img'><img src={BHD} /></Tab>
          <Tab className='cumrap__img'><img src={BHD} /></Tab>
        </TabList>
         
          {/* Cap 2  - RAP PHIM*/}
          <div className="cumrap__info">
            <div className="cumrap__list">
              <TabPanel className = "cumrap__panel" >
              <Tabs forceRenderTabPanel className = "cumrap__menu">
                <TabList className= "cumrap__ul">
                  <Tab className= 'cumrap__li'><p>Day laf Tab 1</p></Tab>
                  <Tab className= 'cumrap__li'><p>Day laf Tab 2</p></Tab>
                  <Tab className= 'cumrap__li'><p>Day laf Tab 3</p></Tab>
                </TabList>
                <Rap/>
              </Tabs>
              </TabPanel>
            </div>
            <div className="cumrap__detail"><Rap/></div>
          </div>
          {/* End-CAP 2 */}

        </Tabs>
      </div>
    </section>
  );
}
