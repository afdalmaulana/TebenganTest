import React, { useState } from "react";
import { Table, Tag } from "antd";
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
            <div>{record.ID[0]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[1]}</div>
            <div>{record.ID[2]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[3]}</div>
            <HiMiniComputerDesktop />
            <div style={{ fontWeight: "lighter" }}>{record.ID[4]}</div>
            <div style={{ fontWeight: "lighter" }}>{record.ID[5]}</div>
          </>
        ) : record.key === 2 ? (
          <>
            <div>{record.ID[0]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[1]}</div>
            <FaMobileScreenButton />
            <div style={{ fontWeight: "lighter" }}>{record.ID[2]}</div>
          </>
        ) : record.key === 3 ? (
          <>
            <div>{record.ID[0]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[1]}</div>
            <div>{record.ID[2]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[3]}</div>
            <FaMobileScreenButton />
            <div style={{ fontWeight: "lighter" }}>{record.ID[4]}</div>
          </>
        ) : record.key === 4 ? (
          <>
            <div>{record.ID[0]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[1]}</div>
            <div>{record.ID[2]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[3]}</div>
            <HiMiniComputerDesktop />
            <div style={{ fontWeight: "lighter" }}>{record.ID[4]}</div>
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
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Tag color="blue" style={{ borderRadius: "10px" }}>
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
          </>
        ) : record.key === 2 ? (
          <>
            <Tag color="green" style={{ borderRadius: "10px" }}>
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
          </>
        ) : record.key === 3 ? (
          <>
            <div>{record.ID[0]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[1]}</div>
            <div>{record.ID[2]}</div>
            <div style={{ fontWeight: "bold" }}>{record.ID[3]}</div>
            <FaMobileScreenButton />
            <div style={{ fontWeight: "lighter" }}>{record.ID[4]}</div>
          </>
        ) : (
          <div>{record.ID}</div>
        )}
      </div>
    ),

    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "Status",
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "Status",
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "Status",
    width: "20%",
  },
  // Kolom lainnya
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
    Status: ["Active", "1 Day Ago", "Last Booking", "-"],
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
    Status: 26,
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
    Status: 26,
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
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default TableList;
