import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { AppContext } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../api/deviceApi";
import BrandBar from "../components/BrandBar";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import DeviceList from "./../components/DeviceList";

const Shop = observer(() => {
  const { device } = useContext(AppContext);

  const getTypes = async () => {
    device?.setTypes(await fetchTypes());
  };

  const getBrands = async () => {
    device?.setBrands(await fetchBrands());
  };

  const getDevices = async (
    typeId?: number,
    brandId?: number,
    page?: number,
    limit?: number
  ) => {
    const data = await fetchDevices(typeId, brandId, page, limit);
    device?.setDevices(data.rows);
    device?.setTotalCount(data.count);
  };

  const clearFilters = () => {
    getDevices(undefined, undefined, 1, 2);
    device?.setSelectedBrand(null);
    device?.setSelectedType(null);
  };

  const renderClearButton =
    device?.selectedBrand || device?.selectedType ? (
      <Button variant="outline-primary" className="mt-3" onClick={clearFilters}>
        Clear all filters
      </Button>
    ) : null;

  useEffect(() => {
    getTypes();
    getBrands();
    getDevices(undefined, undefined, 1, 2);
  }, []);

  useEffect(() => {
    getDevices(
      device?.selectedType?.id,
      device?.selectedBrand?.id,
      device?.page,
      2
    );
  }, [device?.selectedType, device?.selectedBrand, device?.page]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <TypeBar />
          {renderClearButton}
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
