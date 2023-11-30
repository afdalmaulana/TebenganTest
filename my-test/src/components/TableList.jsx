import React, { useState } from "react";
import { Table } from "antd";
import IdField from "./DataDummy/Field/IdField";
import StatusField from "./DataDummy/Field/StatusField";
import NameField from "./DataDummy/Field/NameField";
import { filtersConfig } from "./DataDummy/Filter/FilterConfig";
import ContactField from "./DataDummy/Field/ContactField";
import VoucherField from "./DataDummy/Field/VoucherField";

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    render: (text, record) => <IdField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text, record) => <StatusField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "15%",
  },
  {
    title: "Name",
    dataIndex: "Name",
    render: (text, record) => <NameField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "15%",
  },
  {
    title: "Contact",
    dataIndex: "Contact",
    render: (text, record) => <ContactField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "Address",
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
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
    render: (text, record) => <VoucherField record={record} />,
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
    Contact: ["Mobile Number", "+6281235467890"],
  },
  {
    key: 2,
    ID: ["User ID", "456", "Date created 9 Jun 2022"],
    Status: ["Active", "1 day ago", "Last Booking 2 May 2022"],
    Name: ["Kierra Calzoni", "Male"],
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
    Name: [
      "Kristianto",
      "Male",
      "Company",
      "Toyota Tsusho",
      "Departement",
      "Chemicals",
    ],
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
    Name: [
      "Waluyo Brahmono Paulo Margono",
      "Male",
      "Company",
      "SK Trans",
      "Departement",
      "Processing",
    ],
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
