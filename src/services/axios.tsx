import axios from "axios";

const API = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 60000, // Now all requests using this instance will wait 60 seconds before timing out
});

API.defaults.headers.get["Accept"] = "application/json";

API.defaults.headers.post["Accept"] = "application/json";
API.defaults.headers.post["Content-Type"] = "application/json";

API.interceptors.response.use(
  response => responseSuccessHandler(response),
  error => responseErrorHandler(error)
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const responseSuccessHandler = (response: any) => {
  return response;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const responseErrorHandler = (error: any) => {
  // eslint-disable-next-line no-console
  console.log("<>err<>", error.response.status);

  return Promise.reject(error);
};

export default API;
