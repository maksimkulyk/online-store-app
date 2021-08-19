import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { fetchDevice } from "../api/deviceApi";
import { IDevice } from "../types.dt";
import { getFormattedNumber } from "../utils/utils";

interface Props {}

const DevicePage = (props: Props) => {
  const [device, setDevice] = useState<IDevice>({} as IDevice);
  const { id } = useParams<{ id: string }>();

  const getDevice = async (id: string) => {
    const device = await fetchDevice(id);
    setDevice(device);
  };

  useEffect(() => {
    getDevice(id);
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            src={device.img && `${process.env.REACT_APP_API_URL}${device.img}`}
            width={300}
          />
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-between">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center">
              {device.rating}
              <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
                &#9734;
              </span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, fontSize: 32, border: "none" }}
          >
            <h3>{getFormattedNumber(device.price)} hrn.</h3>
            <Button variant="outline-primary">Add to Cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Specifications:</h2>
        {device?.info?.map((info, index) => (
          <Row
            key={info.number}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
