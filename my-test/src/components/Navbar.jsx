import { Avatar, Flex, Image, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;

export default function Navbar() {
  return (
    <>
      <Flex
        justify="flex-start"
        align="center"
        style={{ position: "relative" }}
        spacing={50}
      >
        <div style={{ marginRight: "20px" }}>
          <Image color="white" width={200} src="tebeng.png" />
        </div>
        <div style={{ marginLeft: "60px" }}>
          <Text
            style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
          >
            User List
          </Text>
        </div>
        <div style={{ position: "absolute", right: 0 }}>
          <Text
            style={{ fontSize: "18px", color: "white", marginRight: "12px" }}
          >
            Marjinal Kamaludin
          </Text>
          <Avatar icon={<UserOutlined />} />
        </div>
      </Flex>
    </>
  );
}
