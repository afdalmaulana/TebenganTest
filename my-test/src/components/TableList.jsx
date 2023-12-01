import React, { useState } from "react";
import { Table } from "antd";
import { DataKeyThree } from "./DataDummy/Data/DataKeyThree";
import IdField from "./DataDummy/Field/IdField";
import StatusField from "./DataDummy/Field/StatusField";
import NameField from "./DataDummy/Field/NameField";
import { filtersConfig } from "./DataDummy/Filter/FilterConfig";
import ContactField from "./DataDummy/Field/ContactField";
import VoucherField from "./DataDummy/Field/VoucherField";
import AddressField from "./DataDummy/Field/AddressField";
import { DataKeyOne } from "./DataDummy/Data/DataKeyOne";
import { DataKeyTwo } from "./DataDummy/Data/DataKeyTwo";
import { DataKeyFour } from "./DataDummy/Data/DataKeyFour";
import TripField from "./DataDummy/Field/TripField";
import ActionField from "./DataDummy/Field/ActionField";

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
    width: "10%",
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
    title: "Contacts",
    dataIndex: "Contact",
    render: (text, record) => <ContactField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "10%",
  },
  {
    title: "Address",
    dataIndex: "Address",
    render: (text, record) => <AddressField record={record} />,
    filters: filtersConfig,
    filterMode: "tree",
    filterSearch: true,
    width: "45%",
  },
  {
    title: "Trip",
    dataIndex: "Trip",
    render: (text, record) => <TripField record={record} />,
    width: "5%",
  },
  {
    title: "Voucher",
    dataIndex: "Voucher",
    render: (text, record) => <VoucherField record={record} />,
    width: "40%",
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: (text, record) => <ActionField record={record} />,
    width: "10%",
  },
];

const data = [DataKeyOne, DataKeyTwo, DataKeyThree, DataKeyFour];

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
