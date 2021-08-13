import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import DeviceList from "./../components/DeviceList";

interface Props {}

const Shop = (props: Props) => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
