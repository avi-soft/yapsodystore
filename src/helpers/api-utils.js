const BASE_URL = process.env.YAPSODY_API_BASE_URL;

export async function getTheme() {
  const data = await fetch(BASE_URL + "");
  Jsondata = await data.json();
  return Jsondata;
}
