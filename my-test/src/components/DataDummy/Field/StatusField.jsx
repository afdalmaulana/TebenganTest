import { Space, Tag } from "antd";
export default function StatusField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left", justifyItems: "center" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={6}>
              <Tag color="blue" style={{ borderRadius: "10px" }}>
                {record.Status[0]}
              </Tag>
              <div>{record.Status[1]}</div>
              <div style={{ color: "gray", fontSize: "12px" }}>
                {record.Status[2]}
              </div>
              <div style={{ fontSize: "12px" }}>{record.Status[3]}</div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={6}>
              <Tag color="green" style={{ borderRadius: "10px" }}>
                {record.Status[0]}
              </Tag>
              <div style={{ fontSize: "12px" }}>{record.Status[1]}</div>
              <div style={{ color: "gray", fontSize: "12px" }}>
                {record.Status[2]}
              </div>
              <div style={{ fontSize: "12px" }}>{record.Status[3]}</div>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={6}>
              <Tag
                style={{
                  borderRadius: "10px",
                  borderColor: "black",
                  color: "black",
                }}
              >
                {record.Status[0]}
              </Tag>
              <div style={{ fontSize: "12px" }}>{record.Status[1]}</div>
              <div style={{ color: "gray", fontSize: "12px" }}>
                {record.Status[2]}
              </div>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={6}>
              <Tag
                style={{
                  borderRadius: "10px",
                  borderColor: "gray",
                  color: "gray",
                }}
              >
                {record.Status[0]}
              </Tag>
              <div style={{ fontSize: "12px" }}>{record.Status[1]}</div>
              <div style={{ color: "gray", fontSize: "12px" }}>
                {record.Status[2]}
              </div>
            </Space>
          </>
        ) : (
          <div>{record.Status}</div>
        )}
      </div>
    </>
  );
}
