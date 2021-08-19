export enum routes {
  ADMIN_ROUTE = "/admin",
  LOGIN_ROUTE = "/login",
  REGISTRATION_ROUTE = "/registration",
  SHOP_ROUTE = "/",
  DEVICE_ROUTE = "/device",
  BASKET_ROUTE = "/basket",
}

export interface IType {
  id?: number;
  name: string;
}

export interface IBrand {
  id?: number;
  name: string;
}

export interface IDevice {
  id?: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info?: IDeviceInfo[];
}

export interface IDeviceInfo {
  title: string;
  description: string;
  number: number;
}
