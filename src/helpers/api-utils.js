<<<<<<< HEAD
const BASE_URL = process.env.YAPSODY_API_BASE_URL;

export async function getTheme() {
  const data = await fetch(BASE_URL + "");
  Jsondata = await data.json();
  return Jsondata;
=======
import request from "./api-urls";

const BaseUrl =
  process.env.ENV === "dev"
    ? "https://stage-api.yapsody.com/"
    : "https://api.yapsody.com/";

const headerData = {
  headers: {
    "venue-code": "myblog",
  },
};

export async function getData(...config) {
  try {
    const [url, headerData = {}] = config;
    const response = await fetch(url, headerData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
}

export async function getTheme() {
  const response = await getData(BaseUrl + request.getVenueDetails, headerData);
  return response;
>>>>>>> 09bf2594a3bc6b139508495c1ebfdf002e933aeb
}
