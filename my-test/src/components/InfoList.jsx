import { Button, Flex, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Text } = Typography;

export default function InfoList() {
  return (
    <>
      <Flex>
        <div
          style={{
            borderLeft: "3px solid black",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
            marginTop: "28px",
            marginLeft: "28px",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>456</Text>
          <Text>Total Users</Text>
        </div>
        <div
          style={{
            borderLeft: "3px solid black",
            display: "flex",
            flexDirection: "column",
            marginLeft: "32px",
            paddingLeft: "10px",
            marginTop: "28px",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>396</Text>
          <Text>Active Users</Text>
        </div>
        <div
          style={{
            borderLeft: "3px solid black",
            display: "flex",
            flexDirection: "column",
            marginLeft: "32px",
            paddingLeft: "10px",
            marginTop: "28px",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>123</Text>
          <Text>Recent Users</Text>
        </div>
        <div
          style={{
            borderLeft: "3px solid black",
            display: "flex",
            flexDirection: "column",
            marginLeft: "32px",
            paddingLeft: "10px",
            marginTop: "28px",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>60</Text>
          <Text>Inactive Users</Text>
        </div>
        <div
          style={{
            borderLeft: "3px solid black",
            display: "flex",
            flexDirection: "column",
            marginLeft: "32px",
            paddingLeft: "10px",
            marginTop: "28px",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>60</Text>
          <Text>Lead Users</Text>
        </div>
        <div style={{ marginLeft: 320 }}>
          <Button
            style={{
              background: "#e8f2ff",
              color: "#1c8af5",
              fontWeight: "bold",
            }}
            ghost
            icon={<PlusOutlined />}
          >
            Add New User
          </Button>
        </div>
      </Flex>
    </>
  );
}
