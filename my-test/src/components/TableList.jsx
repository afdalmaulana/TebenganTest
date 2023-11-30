import React, { useState } from "react";
import { Table } from "antd";
import IdField from "./Field/IdField";
import StatusField from "./Field/StatusField";
import NameField from "./Field/NameField";

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    render: (text, record) => <IdField record={record} />,
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
    render: (text, record) => <StatusField record={record} />,

    width: "15%",
  },
  {
    title: "Name",
    dataIndex: "Name",
    render: (text, record) => <NameField record={record} />,
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
    Name: [
      "Ruben Tornado",
      "Male",
      "Company",
      "SK Trans",
      "Departement",
      "Processing",
    ],
  },
  {
    key: 2,
    ID: ["User ID", "456", "Date created 9 Jun 2022"],
    Status: ["Active", "1 day ago", "Last Booking 2 May 2022"],
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
  },
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
    selections: [],
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
