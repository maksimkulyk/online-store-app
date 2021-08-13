import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { AppContext } from "..";

interface Props {}

const BrandBar = observer((props: Props) => {
  const { device } = useContext(AppContext);

  return (
    <div className="d-flex gap-2">
      {device?.brands.map((brand) => (
        <Card
          border={brand.id === device.selectedBrand.id ? "primary" : "light"}
          key={brand.id}
          className="p-2"
          style={{ cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
