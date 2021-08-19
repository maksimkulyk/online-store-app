import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { routes } from "../types.dt";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { login, registration } from "../api/userApi";
import { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { AppContext } from "..";

const Auth = observer(() => {
  const { user } = useContext(AppContext);
  const { pathname } = useLocation();
  const history = useHistory();
  const isLogin = pathname === routes.LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const authorization = async (mail: string, password: string) => {
    try {
      setError(null);
      let data;
      if (isLogin) data = await login(mail, password);
      if (!isLogin) data = await registration(mail, password);

      user?.setUser(user);
      user?.setIsAuth(true);
      history.push(routes.SHOP_ROUTE);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const renderErrorMessage = error && (
    <Alert variant="danger" className="mt-3 p-2">
      {error}
    </Alert>
  );

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
          <Form.Control
            className="mt-4"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            autoComplete="username"
          />
          <Form.Control
            className="mt-3"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete="current-password"
          />
          <Button
            className="mt-3"
            variant="primary"
            onClick={() => authorization(email, password)}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </Button>
          {renderErrorMessage}
          {renderSignOption}
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
