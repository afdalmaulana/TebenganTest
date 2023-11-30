import { Button, Flex, Image, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Text } = Typography;

export default function InfoList() {
  return (
    <>
      <Flex>
        <div
          style={{
            borderLeft: "3px solid black", // Menambahkan nilai lengkap untuk borderLeft
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px", // Memberi ruang antara teks dan border
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
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>123</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>60</Text>
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
          <Text style={{ fontWeight: "bold", fontSize: "22px" }}>60</Text>
          <Text>Total Users</Text>
        </div>
        <div style={{ marginLeft: 320 }}>
          <Button type="primary" ghost icon={<PlusOutlined />}>
            Add New User
          </Button>
        </div>
      </Flex>
    </>
  );
}