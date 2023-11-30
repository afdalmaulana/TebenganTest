import { Space } from "antd";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreenButton } from "react-icons/fa6";
export default function NameField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>{record.Name[0]}</div>
              <div style={{ color: "gray" }}>{record.Name[1]}</div>
              <div>
                <div style={{ color: "gray" }}>{record.Name[2]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[3]}</div>
              </div>
              <div>
                <div style={{ color: "gray" }}>{record.Name[4]}</div>
                <div style={{ lineHeight: "10px" }}>{record.Name[5]}</div>
              </div>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <FaMobileScreenButton size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[2]}</div>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <div>
                <div>{record.ID[2]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[3]}
                </div>
              </div>
              <FaMobileScreenButton size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[4]}</div>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <div>
                <div>{record.ID[0]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[1]}
                </div>
              </div>
              <div>
                <div>{record.ID[2]}</div>
                <div style={{ lineHeight: "10px", fontWeight: "bold" }}>
                  {record.ID[3]}
                </div>
              </div>
              <HiMiniComputerDesktop size={"1.6em"} />
              <div style={{ color: "gray" }}>{record.ID[4]}</div>
            </Space>
          </>
        ) : (
          <div>{record.ID}</div>
        )}
      </div>
    </>
  );
}
