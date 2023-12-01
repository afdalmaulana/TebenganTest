// import { Typography } from "antd";
import InfoList from "./InfoList";
import SearchButton from "./SearchButton";
import TableList from "./TableList";

export default function Contents() {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "white",
          borderRadius: "20px",
          marginTop: 10,
          marginBottom: 10,
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
