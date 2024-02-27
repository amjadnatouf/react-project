import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionHeader from "../SectionHeader";
import { SectionOne } from "./SectionOne";
import { GetInTouch } from "./SectionTwo";
import { useState } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const handleTabSelect = (selectedTab) => {
    console.log(selectedTab);
    setActiveTab(selectedTab);
  };

  return (
    <div className="projects pt-5" id="projects">
      <SectionHeader
        title="Projects"
        subTitle="A collection  of My Amazing Woks."
      />

      <Tabs
        defaultActiveKey="contact"
        id="fill-tab-example"
        className="pb-5 tab-section w-100 justify-content-center"
        onSelect={handleTabSelect}
      >
        {console.log(activeTab === "home")}
        <Tab
          eventKey="home"
          title="Home"
          // className={activeTab === "home" ? "active" : ""}
        >
          <SectionOne />
          <GetInTouch />
        </Tab>
        <Tab
          eventKey="profile"
          title="Profile"
          // className={activeTab === "profile" ? "active" : ""}
        >
          <GetInTouch />
        </Tab>
        <Tab
          eventKey="contact"
          title="Contact"
          // className={activeTab === "contact" ? "active" : ""}
        >
          <div className="py-5 text-light text-center mb-2">
            Tab content for Contact
          </div>
          <GetInTouch />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsSection;
