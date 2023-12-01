import React, { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ModalAddUser from "./ModalAddUser";

export default function ButtonAddUser() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{
          background: "#e8f2ff",
          color: "#1c8af5",
          fontWeight: "bold",
        }}
        ghost
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
      >
        Add New User
      </Button>
      <ModalAddUser
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      />
    </>
  );
}
