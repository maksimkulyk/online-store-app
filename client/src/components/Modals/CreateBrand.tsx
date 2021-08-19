import { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../api/deviceApi";

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateBrand: FC<Props> = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addBrand = async () => {
    await createBrand({ name: value });
    setValue("");
    onHide();
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Add new Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder="Enter the Type name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-primary" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
