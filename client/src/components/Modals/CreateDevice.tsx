import { FC, useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { AppContext } from "../..";
import { IDeviceInfo } from "../../types.dt";

interface Props {
  show: boolean;
  onHide?: () => void;
}

const CreateDevice: FC<Props> = ({ show, onHide }) => {
  const { device } = useContext(AppContext);
  const [info, setInfo] = useState<IDeviceInfo[]>([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((info) => info.number !== number));
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device?.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device?.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            type="text"
            placeholder="Enter the device name"
          ></Form.Control>
          <Form.Control
            className="mt-3"
            type="number"
            placeholder="Enter the device price"
          ></Form.Control>
          <Form.Control className="mt-3" type="file"></Form.Control>
          <hr />
          <Button variant="outline-primary" onClick={addInfo}>
            Add new feature
          </Button>
          {info.map((info) => (
            <Row key={info.number} className="mt-4">
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter name of the feature"
                />
              </Col>
              <Col md={4}>
                <Form.Control type="text" placeholder="Enter description" />
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
        <Button variant="outline-primary" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
