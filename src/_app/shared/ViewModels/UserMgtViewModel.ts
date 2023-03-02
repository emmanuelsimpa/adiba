import _BaseViewModel from "../models/_BaseViewModel";

class UserMgtViewModel extends _BaseViewModel {
  constructor(data: any) {
    super(data);
  }

  async signIn(data: any) {
    this._set("path", "91cb5408-382c-40c2-9ccb-615b028fc16d");
    return await this.post(data);
  }

  async signUp(data: any) {
    this._set("path", "91cb5408-382c-40c2-9ccb-615b028fc16d");
    return await this.post(data);
  }

  async emailVerify(data: any) {
    this._set("path", "91cb5408-382c-40c2-9ccb-615b028fc16d");
    return await this.post(data);
  }

  async forgotPassword(data: any) {
    this._set("path", "91cb5408-382c-40c2-9ccb-615b028fc16d");
    return await this.post(data);
  }
}

export default UserMgtViewModel;
