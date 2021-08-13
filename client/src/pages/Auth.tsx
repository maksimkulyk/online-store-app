import { Button, Card, Container, Form } from "react-bootstrap";
import { routes } from "../types.dt";
import { NavLink, useLocation } from "react-router-dom";

interface Props {}

const Auth = (props: Props) => {
  const { pathname } = useLocation();
  const isLogin = pathname === routes.LOGIN_ROUTE;

  const renderSignOption = isLogin ? (
    <div className="mt-3">
      Not a member?&nbsp;
      <NavLink to={routes.REGISTRATION_ROUTE}>Sign up now</NavLink>
    </div>
  ) : (
    <div className="mt-3">
      Already a member?&nbsp;
      <NavLink to={routes.LOGIN_ROUTE}>Sign In</NavLink>
    </div>
  );

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 54px)" }}
    >
      <Card style={{ width: "550px" }} className="p-5">
        <h2 className="m-auto">
          {isLogin ? "Sign in to Store" : "Sign up to Store"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Email address" />
          <Form.Control className="mt-3" placeholder="Password" />
          <Button className="mt-3" variant="primary">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
          {renderSignOption}
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
