import _BaseViewModel from "./_BaseViewModel";

class FeedViewModel extends _BaseViewModel {
  constructor(data: any) {
    super(data);
  }

  async list() {
    this._setAll({ path: "ef1c1563-1807-4d88-853d-2a46efd8d335" });
    return await this.get();
  }
}

export default FeedViewModel;
