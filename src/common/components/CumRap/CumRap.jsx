import React from "react";
import "react-tabs/style/react-tabs.css";
import "../CumRap/CumRap.scss";
import BHD from "../../../Assets/img/bhd.png";
import galaxycine from "../../../Assets/img/galaxycine.png";
import megags from "../../../Assets/img/megags.png";
import bt from "../../../Assets/img/bt.jpg";
import dongdacinema from "../../../Assets/img/dongdacinema.png";
import { Tabs, Tab, TabPanel, TabList, TabProvider } from "react-web-tabs";

export default function CumRap() {
  return (
    <section className="cumrap">
      <div className="cumrap__content">
        <h1 className="cumrap__title">CỤM RẠP</h1>
      <TabProvider defaultTab="custom-tab-one">
        <section className="my-custom-tabs">
          <TabList className="my-custom-tablist">
            <Tab tabFor="custom-tab-one">Tab 1</Tab>
            <span className="divider" role="presentation" aria-hidden="true">•</span>
            <Tab tabFor="custom-tab-two">Tab 2</Tab>
            <span className="divider" role="presentation" aria-hidden="true">•</span>
            <Tab tabFor="custom-tab-three" className="my-custom-tab">Tab 3</Tab>
          </TabList>
          <div className="my-tabs-panel-wrapper">
            <TabPanel tabId="custom-tab-one">
              <p>Tab 1 content</p>
            </TabPanel>
            <TabPanel tabId="custom-tab-two">
              <p>Tab 2 content</p>
            </TabPanel>
            <TabPanel tabId="custom-tab-three">
              <p>Tab 3 content</p>
            </TabPanel>
          </div>
        </section>
      </TabProvider>
      </div>
    </section>
  );
}
