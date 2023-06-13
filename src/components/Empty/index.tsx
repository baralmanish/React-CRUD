import { FC } from "react";

import "./style.scss";

interface IEmpty {
  children: React.ReactNode;
}

const Empty: FC<IEmpty> = (props: IEmpty) => {
  return (
    <div className="app-empty">
      <div>Nothing to see yet.</div>
      {props.children}
    </div>
  );
};
export default Empty;
