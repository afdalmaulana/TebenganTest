import { Avatar, Space } from "antd";
export default function NameField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <Avatar size={60} src="https://bit.ly/dan-abramov" />
              <div style={{ fontSize: "12px" }}>{record.Name[0]}</div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {record.Name[1]}
              </div>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Name[2]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[3]}</div>
              </div>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Name[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <Avatar size={60} src="https://bit.ly/code-beast" />
              <div style={{ fontSize: "12px" }}>{record.Name[0]}</div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {record.Name[1]}
              </div>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <Avatar size={60} src="https://bit.ly/ryan-florence" />
              <div style={{ fontSize: "12px" }}>{record.Name[0]}</div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {record.Name[1]}
              </div>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Name[2]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[3]}</div>
              </div>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Name[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <Avatar size={60} src="https://bit.ly/sage-adebayo" />
              <div style={{ fontSize: "12px" }}>{record.Name[0]}</div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {record.Name[1]}
              </div>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Name[2]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[3]}</div>
              </div>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Name[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[5]}</div>
              </div>
            </Space>
          </>
        ) : (
          <div>{record.Name}</div>
        )}
      </div>
    </>
  );
}
