import React from "react";
import { Layout } from "antd";
import Filter from "./Filter";

const { Content } = Layout;

const MemberContent = () => {
  return (
    // <Content
    //   style={{
    //     padding: 24,
    //     margin: 0,
    //     minHeight: 280,
    //     background: "#fff",
    //   }}
    // >
    <Filter />
    // {/* </Content> */}
  );
};

export default MemberContent;
