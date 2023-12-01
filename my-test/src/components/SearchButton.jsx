import { Button, Flex, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchButton() {
  return (
    <>
      <Flex align="flex-end" style={{ position: "relative" }}>
        <Input
          placeholder="Search ID, name, mobile number, email"
          style={{
            width: 350,
            padding: 10,
            borderRadius: "10px",
            marginLeft: "28px",
            marginTop: "22px",
            marginBottom: "10px",
          }}
          suffix={
            <SearchOutlined
              style={{
                fontSize: "22px",
              }}
            />
          }
        />
        <div style={{ position: "absolute", right: 0 }}>
          <Button
            disabled
            style={{
              height: 40,
              width: 85,
              padding: 8,
              marginBottom: "10px",
              marginLeft: 460,
            }}
          >
            Export
          </Button>
          <Button
            style={{
              height: 40,
              width: 120,
              padding: 8,
              marginLeft: 10,
              marginBottom: "10px",
              background: "#e8f2ff",
              color: "#1c8af5",
              fontWeight: "bold",
            }}
          >
            Export All Data
          </Button>
        </div>
      </Flex>
    </>
  );
}
