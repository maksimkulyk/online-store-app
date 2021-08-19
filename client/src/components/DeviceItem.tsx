import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { IDevice, routes } from "../types.dt";

interface Props {
  device: IDevice;
}

const DeviceItem: FC<Props> = ({ device }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(`${routes.DEVICE_ROUTE}/${device.id}`)}
    >
      <Card style={{ width: "14rem", cursor: "pointer" }} border="light">
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_API_URL}${device.img}`}
          width={250}
          height={250}
        />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center text-black-50">
            <div>{device.name}</div>
            <div>
              {device.rating}
              <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
                &#9734;
              </span>
            </div>
          </div>
          <Card.Title>{device.name} </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DeviceItem;
