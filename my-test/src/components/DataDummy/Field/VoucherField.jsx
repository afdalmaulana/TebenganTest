import { Button } from "antd";
import { FaArrowsAltH } from "react-icons/fa";

export default function VoucherField({ record }) {
  return (
    <>
      <div style={{ textAlign: "left", justifyItems: "center" }}>
        {record.key === 1 ? (
          <></>
        ) : record.key === 2 ? (
          <>
            <div style={{ fontSize: "12px" }}>
              <div style={{ fontWeight: "bold" }}>{record.Voucher[0]}</div>
              <div>{record.Voucher[1]}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>{record.Voucher[2]}</div>
                <div
                  style={{
                    height: "5px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                ></div>
                <div>{record.Voucher[3]}</div>
              </div>
              <div>{record.Voucher[4]}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>{record.Voucher[5]}</div>
                <FaArrowsAltH
                  size={"1.3em"}
                  color="black"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                />
                <div>{record.Voucher[6]}</div>
              </div>
            </div>
            <div style={{ fontSize: "12px", marginTop: "24px" }}>
              <div>{record.Voucher[1]}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>{record.Voucher[7]}</div>
                <div
                  style={{
                    height: "5px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: "5px",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                ></div>
                <div>{record.Voucher[8]}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>{record.Voucher[5]}</div>
                <FaArrowsAltH
                  size={"1.3em"}
                  color="black"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                />
                <div>{record.Voucher[6]}</div>
              </div>
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontWeight: "bold" }}>{record.Voucher[9]}</div>
                <div>{record.Voucher[10]}</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>{record.Voucher[5]}</div>
                  <FaArrowsAltH
                    size={"1.3em"}
                    color="black"
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  <div>{record.Voucher[6]}</div>
                </div>
                <Button
                  type="link"
                  style={{
                    fontSize: "12px",
                    paddingLeft: "0px",
                    height: "5px",
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          </>
        ) : record.key === 3 ? (
          <></>
        ) : record.key === 4 ? (
          <></>
        ) : (
          <div>{record.Voucher}</div>
        )}
      </div>
    </>
  );
}
