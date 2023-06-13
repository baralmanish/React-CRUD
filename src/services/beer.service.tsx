import API from "./axios";
import { PER_PAGE, MY_STORAGE, MY_STORAGE_NAME } from "../constants";

import { IBeer } from "../interfaces/beer";

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

    return JSON.parse(myStorage);
  };

  setMyBeers = (beer: IBeer) => {
    const myStorage = MY_STORAGE.getItem(MY_STORAGE_NAME);
    let myBeer: IBeer[] = [];
    if (myStorage) {
      myBeer = JSON.parse(myStorage);
    }

    myBeer.push(beer);
    MY_STORAGE.setItem(MY_STORAGE_NAME, JSON.stringify(myBeer));

    return myBeer;
  };
}

export default new BeerService();
