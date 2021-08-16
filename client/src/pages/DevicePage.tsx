import { Col, Container, Image, Row, Card, Button } from "react-bootstrap";
import { getFormattedNumber } from "../utils/utils";

interface Props {}

const DevicePage = (props: Props) => {
  const device = {
    id: 1,
    name: "8.3 5G",
    price: 13630,
    rating: 0,
    img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
  };

  const description = [
    { id: 1, title: "RAM", description: "5 GB" },
    { id: 2, title: "Camera", description: "12 Mp" },
    { id: 3, title: "Cors", description: "4" },
    { id: 4, title: "Battery", description: "4500 mah" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} />
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
        {description.map((info, index) => (
          <Row
            key={info.id}
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
