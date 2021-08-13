import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { AppContext } from "..";

interface Props {}

const TypeBar = observer((props: Props) => {
  const { device } = useContext(AppContext);
  return (
    <ListGroup>
      {device?.types.map((type) => (
        <ListGroup.Item
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          active={type.id === device.selectedType.id}
          action
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
