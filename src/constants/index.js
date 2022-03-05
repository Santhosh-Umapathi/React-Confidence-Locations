//API
export const BASE_URL =
  "https://dev-api.confidence.org/v2/confidence/locations";
export const USERNAME = decodeURI(process.env.REACT_APP_USERNAME);

//Route
export const BASE_ROUTE = "/home?page=0";

//Profiles
export const GITHUB_URL = "https://github.com/Santhosh-Umapathi";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/santhosh-umapathi-05011992/";

//Known errors that can be ignored
export const ERROR_IGNORE_LIST = [
  "Cancelling previous requests for search", // Request cancelled during typing
  "Request failed with status code 429", //Too many requests
];
