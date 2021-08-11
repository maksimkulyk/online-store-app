import { makeAutoObservable } from "mobx";
import { IBrand, IDevice, IType } from "../types.dt";

export default class UserStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];

  constructor() {
    this._types = [
      { id: 1, name: "Fridge" },
      { id: 2, name: "Smartphone" },
    ];
    this._brands = [
      { id: 1, name: "Nokia" },
      { id: 2, name: "Samsung" },
    ];
    this._devices = [
      {
        id: 1,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
      {
        id: 2,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
      {
        id: 3,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
      {
        id: 4,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types: IType[]) {
    this._types = types;
  }

  setBrands(brands: IBrand[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
