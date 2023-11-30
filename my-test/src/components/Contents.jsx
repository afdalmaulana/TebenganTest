import { Typography } from "antd";
import InfoList from "./InfoList";
import Search from "antd/es/input/Search";
import SearchButton from "./SearchButton";
import TableList from "./TableList";

const { Text } = Typography;
const onSearch = (value, _e, info) => console.log(info?.source, value);
export default function Contents() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "white",
          borderRadius: "20px",
          marginTop: 10,
          padding: 10,
        }}
      >
        <InfoList />
        <SearchButton />
        <TableList />
      </div>
    </>
  );
}
