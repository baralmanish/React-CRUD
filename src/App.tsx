import { FC, useState } from "react";

import { Button, Modal, Tabs } from "antd";
import type { TabsProps } from "antd";

import Beers from "./pages/Beers";

import "./App.scss";

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  const [showAddBeerModal, setShowAddBeerModal] = useState(false);

  const onChange = (key: string) => {
    setSelectedTab(key);
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All Beers",
      children: <Beers />,
    },
    {
      key: "2",
      label: "My Beers",
      children: <Beers setShowAddBeerModal={setShowAddBeerModal} isMine />,
    },
  ];

  const operations = (
    <Button type="primary" onClick={() => setShowAddBeerModal(true)}>
      Add a new beer
    </Button>
  );

  const renderModal = () => {
    return (
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={showAddBeerModal}
        onOk={() => setShowAddBeerModal(false)}
        onCancel={() => setShowAddBeerModal(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    );
  };

  return (
    <>
      <div className="test-app">
        <Tabs
          activeKey={selectedTab}
          items={items}
          tabBarExtraContent={selectedTab === "2" && operations}
          onChange={onChange}
          destroyInactiveTabPane
        />
      </div>
      {renderModal()}
    </>
  );
};

export default App;
