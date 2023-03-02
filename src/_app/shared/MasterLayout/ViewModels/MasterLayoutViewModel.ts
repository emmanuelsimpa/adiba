import { useState } from "react";
import _BaseViewModel from "../../models/_BaseViewModel";
import { NavigationList } from "../components/SidebarMain";

// define the interface for the view model
interface ViewModel {
  navs: NavigationList[];
  updateNavs(newUsers: NavigationList[]): void;
}

// create a function that returns a view model object
const useViewModel = (): ViewModel => {
  const [navs, setNavs] = useState<NavigationList[]>([]); // initialize the users state

  // define a function that updates the users state
  const updateNavs = (newUsers: NavigationList[]) => {
    setNavs(newUsers);
  };

  // return the view model object
  return { navs, updateNavs };
};

class MasterLayoutViewModel extends _BaseViewModel {
  constructor(data: any) {
    super(data);
  }

  async navList(currentApp: any = null) {
    if (currentApp === "channels") {
      this._setAll({ path: "113e80da-23da-4cdd-9fd4-c60b89560ae6" });
    } else {
      this._setAll({ path: "2d664a5c-b14c-4232-b3d5-43a53679cf0a" });
    }
    return await this.get();
  }
}

export default MasterLayoutViewModel;

// export default useViewModel;
