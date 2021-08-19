import { makeAutoObservable } from "mobx";
import { IBrand, IDevice, IType } from "../types.dt";

export default class UserStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  _selectedType: IType;
  _selectedBrand: IBrand;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
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
