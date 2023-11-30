import React from "react";
import { Layout, Space } from "antd";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import InfoList from "./InfoList";
import Contents from "./Contents";
const { Header, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 80,
  paddingInline: 50,
  lineHeight: "80px",
  backgroundColor: "#1c8af5",
};
const contentStyle = {
  //   textAlign: "center",
  minHeight: 120,
  //   lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#f6f6f6",
  paddingInline: 10,
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const Landing = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
        <Navbar />
      </Header>
      <Layout hasSider>
        <Sidebar />
        <Content style={contentStyle}>
          <Contents />
        </Content>
      </Layout>
    </Layout>
  </Space>
);
export default Landing;
