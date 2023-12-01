import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { RiSteering2Fill, RiCoupon2Fill } from "react-icons/ri";
import { FaRoute } from "react-icons/fa6";
import { FaCarSide, FaClipboardList, FaMoneyCheckAlt } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { Button, Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("User List", "1", <UserOutlined />),
  getItem("Driver List", "2", <RiSteering2Fill />),
  getItem("Route List", "3", <FaRoute />),
  getItem("Voucher Catalogue", "4", <RiCoupon2Fill />),
  getItem("Trip List", "5", <FaCarSide />),
  getItem("Booking List", "6", <FaClipboardList />),
  getItem("All Transaction", "7", <FaMoneyCheckAlt />),
  getItem("Ride List", "8", <IoIosListBox />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(180);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setSidebarWidth(collapsed ? 180 : 80);
  };

  return (
    <div
      style={{
        width: sidebarWidth,
        transition: "width 0.3s ease",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <Button
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      >
        {/* {items.map((items) => (
          <Menu.Item
            key={items.key}
            icon={items.icon}
            style={{ fontSize: "10px" }}
          >
            {items.label}
          </Menu.Item>
        ))} */}
      </Menu>
    </div>
  );
};

export default Sidebar;
