import { FC, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../api/deviceApi";

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateType: FC<Props> = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = async () => {
    await createType({ name: value });
    setValue("");
    onHide();
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Add new Type</Modal.Title>
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
        <Button variant="outline-primary" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
