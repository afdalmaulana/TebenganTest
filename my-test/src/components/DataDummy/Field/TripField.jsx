import { Button, Space } from "antd";
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
              <div style={{ lineHeight: "5px", fontSize: "12px" }}>
                {record.Trip[0]}
              </div>
              <Button
                type="link"
                style={{ fontSize: "12px", paddingLeft: "0px", height: "5px" }}
              >
                View Details
              </Button>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <div style={{ lineHeight: "5px", fontSize: "12px" }}>
                {record.Trip[0]}
              </div>
              <Button
                type="link"
                style={{ fontSize: "12px", paddingLeft: "0px", height: "5px" }}
              >
                View Details
              </Button>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <div style={{ lineHeight: "5px", fontSize: "12px" }}>
                {record.Trip[0]}
              </div>
              <Button
                type="link"
                style={{ fontSize: "12px", paddingLeft: "0px", height: "5px" }}
              >
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
