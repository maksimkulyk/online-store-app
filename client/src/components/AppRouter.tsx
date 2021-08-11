import { Redirect, Route, Switch } from "react-router";
import { authRoutes, publicRoutes } from "../routes";

interface Props {}

const AppRouter = (props: Props) => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      {publicRoutes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
