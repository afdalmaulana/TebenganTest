import { Space } from "antd";
import { MdVerified } from "react-icons/md";
export default function ContactField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray", fontSize: "12px" }}>
                  {record.Contact[2]}
                </div>
                <MdVerified
                  size={"1.6em"}
                  color="green"
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div>
                <div style={{ lineHeight: "2px", fontSize: "12px" }}>
                  {record.Contact[3]}
                </div>
              </div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray", fontSize: "12px" }}>
                  {record.Contact[2]}
                </div>
                <MdVerified
                  size={"1.6em"}
                  color="green"
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div>
                <div style={{ lineHeight: "2px", fontSize: "12px" }}>
                  {record.Contact[3]}
                </div>
              </div>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray", fontSize: "12px" }}>
                  {record.Contact[2]}
                </div>
                <MdVerified
                  size={"1.6em"}
                  color="green"
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div>
                <div style={{ lineHeight: "2px", fontSize: "12px" }}>
                  {record.Contact[3]}
                </div>
              </div>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <div style={{ fontSize: "12px" }}>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray", fontSize: "12px" }}>
                  {record.Contact[2]}
                </div>
              </div>
              <div>
                <div style={{ lineHeight: "2px", fontSize: "12px" }}>
                  {record.Contact[3]}
                </div>
              </div>
            </Space>
          </>
        ) : (
          <div>{record.Contact}</div>
        )}
      </div>
      {/* <div style={{ textAlign: "left", justifyItems: "center" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "14px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray" }}>{record.Contact[2]}</div>
                <MdVerified
                  size={"1.6em"}
                  color="green"
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div>
                <div style={{ lineHeight: "2px" }}>{record.Contact[3]}</div>
              </div>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "14px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray" }}>{record.Contact[2]}</div>
                <MdVerified
                  size={"1.6em"}
                  color="green"
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div>
                <div style={{ lineHeight: "2px" }}>{record.Contact[3]}</div>
              </div>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "14px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray" }}>{record.Contact[2]}</div>
                <MdVerified
                  size={"1.6em"}
                  color="green"
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div>
                <div style={{ lineHeight: "2px" }}>{record.Contact[3]}</div>
              </div>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[0]}</div>
                <div style={{ lineHeight: "14px" }}>{record.Contact[1]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "gray" }}>{record.Contact[2]}</div>
              </div>
              <div>
                <div style={{ lineHeight: "2px" }}>{record.Contact[3]}</div>
              </div>
              <div>
                <div style={{ color: "gray" }}>{record.Contact[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Contact[5]}</div>
              </div>
            </Space>
          </>
        ) : (
          <div>{record.Status}</div>
        )}
      </div> */}
    </>
  );
}
