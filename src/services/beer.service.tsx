import API from "./axios";
import { PER_PAGE, MY_STORAGE, MY_STORAGE_NAME } from "../constants";

class BeerService {
  get = (page = 0) => {
    let url = "/beers";

    if (page) {
      url = `${url}?page=${page}&per_page=${PER_PAGE}`;
    }

    return API.get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
  };

  getMyBeers = () => {
    const myStorage = MY_STORAGE.getItem(MY_STORAGE_NAME);
    if (!myStorage) {
      return [];
    }
    console.log(">>> myStorage", myStorage);

    return [];
  };
}

export default new BeerService();
