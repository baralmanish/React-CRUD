import { FC } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import "./style.scss";

interface ILoading {
  children: React.ReactNode;
}

const Loading: FC<ILoading> = (props: ILoading) => {
  return (
    <div className="app-loading">
      <div className="app-loading__title">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> Loading...
      </div>
      {props.children}
    </div>
  );
};
export default Loading;
