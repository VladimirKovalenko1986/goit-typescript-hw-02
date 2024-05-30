import axios from "axios";
import { ApiResponse } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/search";

const fetchArticles = async (
  serchQuery: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get("/photos", {
    params: {
      client_id: "oC8q1vce9tIogd1t5F1kWOl788UK_R1oMRsjVWmGT0o",
      query: serchQuery,
      per_page: 20,
      page: page,
    },
  });
  console.log(response);
  return response.data;
};

export { fetchArticles };
