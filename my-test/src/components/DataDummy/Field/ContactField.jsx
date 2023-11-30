import { Space, Tag } from "antd";
export default function ContactField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left", justifyItems: "center" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>{record.Contact[0]}</div>
              <div style={{ color: "gray" }}>{record.Contact[1]}</div>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[2]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[3]}</div>
              </div>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Tag color="green" style={{ borderRadius: "10px" }}>
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div style={{ color: "gray" }}>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
          </>
        ) : record.key === 3 ? (
          <>
            <Tag
              style={{
                borderRadius: "10px",
                borderColor: "black",
                color: "black",
              }}
            >
              {record.Status[0]}
            </Tag>
            <div>{record.Status[1]}</div>
            <div style={{ color: "gray" }}>{record.Status[2]}</div>
            <div>{record.Status[3]}</div>
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
              <div>{record.Status[1]}</div>
              <div style={{ color: "gray" }}>{record.Status[2]}</div>
              <div>{record.Status[3]}</div>
            </Space>
          </>
        ) : (
          <div>{record.Status}</div>
        )}
      </div>
    </>
  );
}
