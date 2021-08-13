import { useContext } from "react";
import { AppContext } from "..";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { routes } from "../types.dt";
import { observer } from "mobx-react-lite";

interface Props {}

const NavBar = observer((props: Props) => {
  const { user } = useContext(AppContext);

  const authorizedUser = (
    <Nav className="ml-auto">
      <Button variant="outline-primary" style={{ marginRight: "10px" }}>
        Admin
      </Button>
      <Button variant="outline-light" onClick={() => user?.setIsAuth(false)}>
        Sign out
      </Button>
    </Nav>
  );

  const notAuthorizedUser = (
    <Nav className="ml-auto">
      <Button variant="outline-light" onClick={() => user?.setIsAuth(true)}>
        Sign in
      </Button>
    </Nav>
  );

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={routes.SHOP_ROUTE}>
            <Navbar.Brand>Store</Navbar.Brand>
          </NavLink>
          {user?.isAuth ? authorizedUser : notAuthorizedUser}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
