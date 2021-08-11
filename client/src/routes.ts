import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { routes } from "./types.dt";

export const authRoutes = [
  {
    path: routes.ADMIN_ROUTE,
    component: Admin,
  },
  {
    path: routes.BASKET_ROUTE,
    component: Basket,
  },
];

export const publicRoutes = [
  {
    path: routes.SHOP_ROUTE,
    component: Shop,
  },
  {
    path: routes.LOGIN_ROUTE,
    component: Auth,
  },
  {
    path: routes.REGISTRATION_ROUTE,
    component: Auth,
  },
  {
    path: `${routes.DEVICE_ROUTE}/:id`,
    component: DevicePage,
  },
];
