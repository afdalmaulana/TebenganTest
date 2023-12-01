import { Button, Flex, Space } from "antd";
export default function TripField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}></Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>{record.Trip[0]}</div>
              <Button type="link" style={{ paddingLeft: "0px" }}>
                View Details
              </Button>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>{record.Trip[0]}</div>
              <Button type="link" style={{ paddingLeft: "0px" }}>
                View Details
              </Button>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>{record.Trip[0]}</div>
              <Button type="link" style={{ paddingLeft: "0px" }}>
                View Details
              </Button>
            </Space>
          </>
        ) : (
          <div>{record.Trip}</div>
        )}
      </div>
    </>
  );
}
