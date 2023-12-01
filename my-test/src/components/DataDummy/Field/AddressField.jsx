import { Button, Flex, Space } from "antd";
export default function AddressField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        {record.key === 1 ? (
          <>
            <Space direction="vertical" size={10}>
              <Flex>
                <div
                  style={{
                    fontSize: "12px",
                    marginRight: "24px",
                  }}
                >
                  <div style={{ color: "gray" }}>{record.Address[0]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[1]}</div>
                  <div>{record.Address[2]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "24px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[3]}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "gray" }}>{record.Address[4]}</div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div style={{ color: "gray" }}>{record.Address[5]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[6]}</div>
                  <div>{record.Address[7]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "24px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[8]}
                    </div>
                    <div>
                      <div style={{ color: "gray" }}>{record.Address[9]}</div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Space>
          </>
        ) : record.key === 2 ? (
          <>
            <Space direction="vertical" size={10}>
              <Flex>
                <div
                  style={{
                    fontSize: "12px",
                    marginRight: "24px",
                  }}
                >
                  <div style={{ color: "gray" }}>{record.Address[0]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[1]}</div>
                  <div>{record.Address[2]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "24px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[3]}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "gray" }}>{record.Address[4]}</div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div style={{ color: "gray" }}>{record.Address[5]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[6]}</div>
                  <div>{record.Address[7]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "24px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[8]}
                    </div>
                    <div>
                      <div style={{ color: "gray" }}>{record.Address[9]}</div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Space>
          </>
        ) : record.key === 3 ? (
          <>
            <Space direction="vertical" size={10}>
              <Flex>
                <div
                  style={{
                    fontSize: "12px",
                    marginRight: "24px",
                  }}
                >
                  <div style={{ color: "gray" }}>{record.Address[0]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[1]}</div>
                  <div>{record.Address[2]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "24px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[3]}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "gray" }}>{record.Address[4]}</div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div style={{ color: "gray" }}>{record.Address[5]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[6]}</div>
                  <div>{record.Address[7]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "24px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[8]}
                    </div>
                    <div>
                      <div style={{ color: "gray" }}>{record.Address[9]}</div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Space>
          </>
        ) : record.key === 4 ? (
          <>
            <Space direction="vertical" size={10}>
              <Flex>
                <div
                  style={{
                    fontSize: "12px",
                    marginRight: "24px",
                  }}
                >
                  <div style={{ color: "gray" }}>{record.Address[0]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[1]}</div>
                  <div>{record.Address[2]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "10px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[3]}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "gray" }}>{record.Address[4]}</div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div style={{ color: "gray" }}>{record.Address[5]}</div>
                  <div style={{ fontWeight: "bold" }}>{record.Address[6]}</div>
                  <div>{record.Address[7]}</div>
                  <Button type="link" style={{ paddingLeft: "0px" }}>
                    View Map
                  </Button>
                  <div>
                    <div
                      style={{
                        marginTop: "10px",
                        // lineHeight: "12px",
                        color: "gray",
                      }}
                    >
                      {record.Address[8]}
                    </div>
                    <div>
                      <div style={{ color: "gray" }}>{record.Address[9]}</div>
                    </div>
                  </div>
                </div>
              </Flex>
            </Space>
          </>
        ) : (
          <div>{record.ID}</div>
        )}
      </div>
    </>
  );
}
