import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../api/deviceApi";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import { IBrand, IType } from "../types.dt";
import DeviceList from "./../components/DeviceList";

const Shop = observer(() => {
  const { device } = useContext(AppContext);

  const getTypes = async () => {
    device?.setTypes(await fetchTypes());
  };

  const getBrands = async () => {
    device?.setBrands(await fetchBrands());
  };

  const getDevices = async () => {
    const { rows } = await fetchDevices();
    device?.setDevices(rows);
  };

  useEffect(() => {
    getTypes();
    getBrands();
    getDevices();
  }, []);

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
});

export default Shop;
