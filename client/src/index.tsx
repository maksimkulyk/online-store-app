import { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DeviceStore from "./store/Device.store";
import UserStore from "./store/User.store";

type ContextProps = {
  user: UserStore;
  device: DeviceStore;
};

export const AppContext = createContext<Partial<ContextProps>>({});

ReactDOM.render(
  <AppContext.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <App />
  </AppContext.Provider>,
  document.getElementById("root")
);
