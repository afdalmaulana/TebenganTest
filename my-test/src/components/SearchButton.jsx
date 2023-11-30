import { Button, Flex, Input, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import Input from "antd/es/input/Search";

export default function SearchButton() {
  return (
    <>
      <Flex align="flex-end">
        <Input
          placeholder="Search ID, name, mobile number, email"
          style={{
            width: 350,
            padding: 10,
            borderRadius: "10px",
            marginLeft: "28px",
            marginTop: "22px",
          }}
          suffix={
            <SearchOutlined
              style={{
                fontSize: "22px",
              }}
            />
          }
        />
        <Button
          disabled
          style={{ height: 40, width: 85, padding: 8, marginLeft: 460 }}
        >
          Export
        </Button>
        <Button
          style={{
            height: 40,
            width: 120,
            padding: 8,
            marginLeft: 10,
            background: "#e8f2ff",
            color: "#0766AD",
            fontWeight: "bold",
          }}
        >
          Export All Data
        </Button>
      </Flex>
    </>
  );
}
