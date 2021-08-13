import { makeAutoObservable } from "mobx";
import { IBrand, IDevice, IType } from "../types.dt";

export default class UserStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  _selectedType: IType;
  _selectedBrand: IBrand;

  constructor() {
    this._types = [
      { id: 1, name: "Fridges" },
      { id: 2, name: "Smartphones" },
      { id: 3, name: "Notebooks" },
      { id: 4, name: "Gadgets" },
    ];
    this._brands = [
      { id: 1, name: "Nokia" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Acer" },
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
      {
        id: 5,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
      {
        id: 6,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
      {
        id: 7,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
      {
        id: 8,
        name: "8.3 5G",
        price: 13630,
        rating: 0,
        img: "https://images.ctfassets.net/wcfotm6rrl7u/12hVmTabVOfaZX2orFYnwn/7317299d96cf5c43dfbfe8491bbf7016/nokia-8_3_5G-polar_night-front_back-int.png?h=600&fm=png&fl=png8",
      },
    ];
    this._selectedType = {} as IType;
    this._selectedBrand = {} as IBrand;
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

  setSelectedType(type: IType) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: IBrand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
