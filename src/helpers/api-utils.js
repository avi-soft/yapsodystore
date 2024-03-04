import request from "./api-urls";

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const header = {
  headers: {
    "venue-code": "sycuancasino",
  },
};

async function getData(url, header = {}) {
  return await fetch(url, header);
}

export async function getTheme() {
  const query = await getData(BaseUrl + request.getVenueDetails, header);
  const response = await query.json();
  return response;
}
