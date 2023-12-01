import { Button, Space } from "antd";
export default function ActionField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <Button style={{ fontWeight: "bold", width: "120px" }}>
                Edit
              </Button>
              <Button disabled style={{ width: "120px" }}>
                Delete
              </Button>
              <Button danger style={{ fontWeight: "bold", width: "120px" }}>
                Suspend
              </Button>
            </Space>
          </>
        ) : record.key === 2 ? (
          <></>
        ) : record.key === 3 ? (
          <></>
        ) : record.key === 4 ? (
          <></>
        ) : (
          <div>{record.Action}</div>
        )}
      </div>
    </>
  );
}
