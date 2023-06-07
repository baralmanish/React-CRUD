import { FC } from "react";
import { Layout as AntLayout } from "antd";

const { Content } = AntLayout;

import "./style.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = (props: ILayout) => {
  return (
    <AntLayout className="app-layout">
      {/* <Header className="app-header">
        <div className="app-logo">Beer CRUD</div>
      </Header> */}
      <Content className="app-content">{props.children}</Content>
      {/* <Footer className="app-footer">React CRUD Footer</Footer> */}
    </AntLayout>
  );
};
export default Layout;
