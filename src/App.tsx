import { FC, useState } from "react";

import { Button, Modal, Tabs, Form, Input } from "antd";
import type { TabsProps } from "antd";

import Beers from "./pages/Beers";

import BeerService from "./services/beer.service";
import { IBeer } from "./interfaces/beer";

import BeerBottle from "./assets/images/houzz-beer.png";
import "./App.scss";

const App: FC = () => {
  const [form] = Form.useForm();

  const [beer, setBeer] = useState<IBeer[]>([]);
  const [selectedTab, setSelectedTab] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showAddBeerModal, setShowAddBeerModal] = useState(false);

  const onChange = (key: string) => {
    setSelectedTab(key);
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
      children: <Beers setShowAddBeerModal={setShowAddBeerModal} myBeer={beer} isMine />,
    },
  ];

  const operations = (
    <Button type="primary" onClick={() => setShowAddBeerModal(true)}>
      Add a new beer
    </Button>
  );

  const handleCancel = () => {
    form.resetFields();
    setShowAddBeerModal(false);
  };

  const onFinish = (values: IBeer) => {
    const thisBeer = {
      id: Date.now(),
      name: values.name,
      tagline: values.tagline,
      description: values.description,
    };
    const myBeer = BeerService.setMyBeers(thisBeer);
    setBeer(myBeer);
    handleCancel();
  };

  const renderModal = () => {
    return (
      <Modal
        centered
        title="Add a New Beer"
        open={showAddBeerModal}
        className="add-beer-modal"
        onOk={() => setShowAddBeerModal(false)}
        onCancel={() => setShowAddBeerModal(false)}
        footer={[
          <Button key="back" onClick={handleCancel} disabled={isSubmitting}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={isSubmitting} onClick={() => form.submit()}>
            {isSubmitting ? "Saving..." : "Save"}
          </Button>,
        ]}
      >
        <div className="image-container">
          <img src={BeerBottle} />
        </div>
        <Form
          form={form}
          name="add-beer"
          className="add-beer-form"
          onFinish={onFinish}
          disabled={isSubmitting}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Beer Name*" />
          </Form.Item>
          <Form.Item name="tagline" rules={[{ required: true }]}>
            <Input placeholder="Genre*" />
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Description*" />
          </Form.Item>
        </Form>
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
