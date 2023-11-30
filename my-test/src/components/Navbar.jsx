import { Flex, Image, Typography } from "antd";
const { Text } = Typography;

export default function Navbar() {
  return (
    <>
      <Flex justify="flex-start" align="center" spacing={50}>
        <div style={{ marginRight: "20px" }}>
          <Image color="white" width={200} src="tebe.png" />
        </div>
        <div style={{ marginLeft: "60px" }}>
          <Text
            style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
          >
            User List
          </Text>
        </div>
      </Flex>
    </>
  );
}
