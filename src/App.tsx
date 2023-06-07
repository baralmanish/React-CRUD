import { FC, useState } from "react";

import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";

import Beers from "./pages/Beers";

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState("1");

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
      children: `Content of Tab Pane 2`,
    },
  ];

  const operations = <Button type="primary">Add a new beer</Button>;

  return (
    <div className="sss">
      <Tabs
        activeKey={selectedTab}
        items={items}
        tabBarExtraContent={selectedTab === "2" && operations}
        onChange={onChange}
      />
    </div>
  );
};

export default App;
