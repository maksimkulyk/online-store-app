import { useContext } from "react";
import { AppContext } from "..";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { routes } from "../types.dt";
import { observer } from "mobx-react-lite";

interface Props {}

const NavBar = observer((props: Props) => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  const signInHandler = () => {
    history.push(routes.LOGIN_ROUTE);
  };

  const logOutHandler = () => {
    history.push(routes.LOGIN_ROUTE);
    user?.setUser({});
    user?.setIsAuth(false);
  };

  const authorizedUser = (
    <Nav className="ml-auto">
      <Button
        variant="outline-primary"
        style={{ marginRight: "10px" }}
        onClick={() => history.push(routes.ADMIN_ROUTE)}
      >
        Admin
      </Button>
      <Button variant="outline-light" onClick={logOutHandler}>
        Log out
      </Button>
    </Nav>
  );

  const notAuthorizedUser = (
    <Nav className="ml-auto">
      <Button variant="outline-light" onClick={signInHandler}>
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
