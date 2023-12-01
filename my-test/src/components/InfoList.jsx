import { Flex, Typography } from "antd";
import ButtonAddUser from "./ButtonAddUser";
const { Text } = Typography;

export default function InfoList() {
  return (
    <>
      <Flex style={{ position: "relative" }}>
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
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>456</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>396</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>123</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>60</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>60</Text>
          <Text>Lead Users</Text>
        </div>
        <div style={{ marginLeft: 320, position: "absolute", right: 0 }}>
          <ButtonAddUser />
        </div>
      </Flex>
    </>
  );
}
