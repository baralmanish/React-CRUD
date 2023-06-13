import API from "./axios";
import { perPage } from "../constants";

class BeerService {
  get = (page = 0) => {
    let url = "/beers";

    if (page) {
      url = `${url}?page=${page}&per_page=${perPage}`;
    }

    return API.get(url)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
  };
}

export default new BeerService();
