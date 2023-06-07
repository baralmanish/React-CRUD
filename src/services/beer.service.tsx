import API from "./axios";

const perPage = process.env.REACT_APP_PER_PAGE || 10;

class BeerService {
  get = (page = 1) => {
    return API.get(`/beers?page=${page}&per_page=${perPage}`)
      .then(response => {
        return response;
      })
      .catch(error => {
        return error.response;
      });
  };
}

export default new BeerService();
