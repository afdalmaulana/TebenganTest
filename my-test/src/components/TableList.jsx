import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreenButton } from "react-icons/fa6";

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    render: (text, record) => (
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <div>
                <div>{record.ID[2]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[3]}
                </div>
              </div>
              <HiMiniComputerDesktop size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[4]}</div>
              <div style={{ color: "gray" }}>{record.ID[5]}</div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <FaMobileScreenButton size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[2]}</div>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <div>
                <div>{record.ID[2]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[3]}
                </div>
              </div>
              <FaMobileScreenButton size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[4]}</div>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <div>
                <div>{record.ID[2]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[3]}
                </div>
              </div>
              <HiMiniComputerDesktop size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[4]}</div>
            </Space>
          </>
        ) : (
          <div>{record.ID}</div>
        )}
      </div>
    ),
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
        children: [
          {
            text: "Yellow",
            value: "Yellow",
          },
          {
            text: "Pink",
            value: "Pink",
          },
        ],
      },
      {
        text: "Category 2",
        value: "Category 2",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text, record) => (
      <div style={{ textAlign: "left", justifyItems: "center" }}>
        {record.key === 1 ? (
          <>
            <Tag color="blue" style={{ borderRadius: "10px" }}>
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div style={{ color: "gray" }}>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
          </>
        ) : record.key === 2 ? (
          <>
            <Tag color="green" style={{ borderRadius: "10px" }}>
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div style={{ color: "gray" }}>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
          </>
        ) : record.key === 3 ? (
          <>
            <Tag
              style={{
                borderRadius: "10px",
                borderColor: "black",
                color: "black",
              }}
            >
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div style={{ color: "gray" }}>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={6}>
              <Tag
                style={{
                  borderRadius: "10px",
                  borderColor: "gray",
                  color: "gray",
                }}
              >
                {record.Status[0]}
              </Tag>
              <div>{record.Status[1]}</div>
              <div style={{ color: "gray" }}>{record.Status[2]}</div>
              <div>{record.Status[3]}</div>
            </Space>
          </>
        ) : (
          <div>{record.Status}</div>
        )}
      </div>
    ),

    width: "15%",
  },
  {
    title: "Name",
    dataIndex: "Name",
    width: "20%",
  },
  {
    title: "Contact",
    dataIndex: "Contact",
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "Address",
    width: "20%",
  },
  {
    title: "Trip",
    dataIndex: "Trip",
    width: "20%",
  },
  {
    title: "Voucher",
    dataIndex: "Voucher",
    width: "20%",
  },
  {
    title: "Action",
    dataIndex: "Action",
    width: "20%",
  },
];

const data = [
  {
    key: 1,
    ID: [
      "User ID",
      "457",
      "Employee ID",
      "BAS-51243",
      "Date created 9 Jun 2022",
      "First app login on 22 Nov 2022",
    ],
    Status: ["Lead", "-", "Last Booking", "-"],
    // Informasi lainnya
  },
  {
    key: 2,
    ID: ["User ID", "456", "Date created 9 Jun 2022"],
    Status: ["Active", "1 day ago", "Last Booking 2 May 2022"],
    // Informasi lainnya
  },
  {
    key: 3,
    ID: [
      "User ID",
      "457",
      "Employee ID",
      "BAS-51243",
      "Date created 9 Jun 2022",
    ],
    Status: ["Recent", "56 days ago", "Last Booking 9 June 2022"],
    // Informasi lainnya
  },
  {
    key: 4,
    ID: [
      "User ID",
      "457",
      "Employee ID",
      "BAS-51243",
      "Date created 9 Jun 2022",
    ],
    Status: ["Inactive", "125 days ago", "Last Booking 2 May 2022"],
    // Informasi lainnya
  },
  // Data lainnya
];

const TableList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      // Seleksi lainnya
    ],
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      //   scroll={{
      //     y: "500px",
      //   }}
      pagination={false}
    />
  );
};

export default TableList;
