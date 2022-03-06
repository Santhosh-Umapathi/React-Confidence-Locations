import axios from "axios";
//Constants
import { USERNAME, BASE_URL } from "../constants";

export const api = async ({ start = 0, limit = 10 }) => {
  try {
    const { data } = await axios.post(
      BASE_URL,
      { start, limit },
      {
        headers: {
          Username: USERNAME,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};
