import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { AppContext } from "../..";
import { createDevice, fetchBrands, fetchTypes } from "../../api/deviceApi";
import { IDeviceInfo } from "../../types.dt";

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateDevice: FC<Props> = observer(({ show, onHide }) => {
  const { device } = useContext(AppContext);
  const [info, setInfo] = useState<IDeviceInfo[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<File>({} as File);

  const getTypes = async () => {
    device?.setTypes(await fetchTypes());
  };

  const getBrands = async () => {
    device?.setBrands(await fetchBrands());
  };

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((info) =>
        info.number === number ? { ...info, [key]: value } : info
      )
    );
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((info) => info.number !== number));
  };

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files && setFile(event.target.files[0]);
  };

  const addDevice = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", `${device?.selectedBrand.id}`);
    formData.append("typeId", `${device?.selectedType.id}`);
    formData.append("info", JSON.stringify(info));

    await createDevice(formData);
    onHide();
  };

  useEffect(() => {
    getTypes();
    getBrands();
  }, []);

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle>
              {device?.selectedType.name || "Choose type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device?.types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => device.setSelectedType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle>
              {device?.selectedBrand.name || "Choose brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device?.brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => device.setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            type="text"
            placeholder="Enter the device name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></Form.Control>
          <Form.Control
            className="mt-3"
            type="number"
            placeholder="Enter the device price"
            value={price}
            onChange={(event) => setPrice(+event.target.value)}
          ></Form.Control>
          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFile}
          ></Form.Control>
          <hr />
          <Button variant="outline-primary" onClick={addInfo}>
            Add new feature
          </Button>
          {info.map((info) => (
            <Row key={info.number} className="mt-4">
              <Col md={4}>
                <Form.Control
                  type="text"
                  value={info.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, info.number)
                  }
                  placeholder="Enter name of the feature"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  value={info.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, info.number)
                  }
                  placeholder="Enter description"
                />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(info.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-primary" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
