import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from ".";
import { check } from "./api/userApi";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

const App = observer(() => {
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user?.setUser(true);
        user?.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  );
});

export default App;
