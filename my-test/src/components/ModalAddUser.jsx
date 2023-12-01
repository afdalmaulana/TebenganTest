// ModalAddUser.jsx
import React, { useState } from "react";
import { Typography, Radio, Flex, Input, Modal, Select, Checkbox } from "antd";
import UploadProfile from "./UploadProfile";
import { MdOutlineAccessTime } from "react-icons/md";
const { Text } = Typography;

const ModalAddUser = ({ open, onOk, confirmLoading, onCancel }) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSelect = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Modal
      title="Add New User"
      open={open}
      onOk={onOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      okText={"Add New User"}
      width={800}
      style={{ top: 20 }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Text style={{ fontSize: "24px" }}>Profile Photo</Text>
          <UploadProfile />
        </div>
        <div style={{ display: "grid", gap: 20 }}>
          <div>
            <Text>Full Name</Text>
            <Input placeholder="Enter Full Name" width={"100%"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Text>Gender</Text>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Female</Radio>
              <Radio value={2}>Male</Radio>
            </Radio.Group>
          </div>
          <div>
            <Text>Mobile Number</Text>
            <Input addonBefore="+62" placeholder="8xx" width={"100%"} />
          </div>
          <Flex gap={20}>
            <div>
              <Text>Emergency Contact (Optional)</Text>
              <Input addonBefore="+62" placeholder="8xx" width={"100%"} />
            </div>
            <div>
              <Text>Relationship</Text>
              <Select
                defaultValue="Select"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Father",
                    label: "Father",
                  },
                  {
                    value: "Mother",
                    label: "Mother",
                  },
                  {
                    value: "Brother",
                    label: "Brother",
                  },
                  {
                    value: "Friend",
                    label: "Friend",
                  },
                ]}
              />
            </div>
            <div>
              <Text>Name</Text>
              <Input placeholder="Enter Name" width={"100%"} />
            </div>
          </Flex>
          <div>
            <Text>Email (Optional)</Text>
            <Input placeholder="Enter Email" width={"100%"} />
          </div>
          <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
            Home Details
          </Text>
          <div>
            <Text>Home Address</Text>
            <Input placeholder="Search home address" width={"100%"} />
          </div>
          <Flex gap={20}>
            <div>
              <Text>Arival Time</Text>
              <Input
                suffix={<MdOutlineAccessTime />}
                placeholder="Select Time"
              />
              <Checkbox onChange={onSelect}>Anytime</Checkbox>
            </div>
            <div>
              <Text>Depart Time</Text>
              <Input
                suffix={<MdOutlineAccessTime />}
                placeholder="Select Time"
              />
              <Checkbox onChange={onSelect}>Anytime</Checkbox>
            </div>
          </Flex>
          <div>
            <Text>Home Address Notes (Optional)</Text>
            <Input placeholder="Search home address notes" width={"100%"} />
          </div>
          <Text style={{ fontSize: "14px", fontWeight: "bold" }}>
            Work Details
          </Text>
          <div>
            <Text>Wordk Address</Text>
            <Input placeholder="Search work address" width={"100%"} />
          </div>
          <Flex gap={20}>
            <div>
              <Text>Arival Time</Text>
              <Input
                suffix={<MdOutlineAccessTime />}
                placeholder="Select Time"
              />
              <Checkbox onChange={onSelect}>Anytime</Checkbox>
            </div>
            <div>
              <Text>Depart Time</Text>
              <Input
                suffix={<MdOutlineAccessTime />}
                placeholder="Select Time"
              />
              <Checkbox onChange={onSelect}>Anytime</Checkbox>
            </div>
          </Flex>
          <div>
            <Text>Home Address Notes (Optional)</Text>
            <Input placeholder="Search home address notes" width={"100%"} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddUser;
