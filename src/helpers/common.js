export function calculateRemainingTime(endDate) {
  // Convert end date string to a Date object
  const endDateTime = new Date(endDate);

  // Get the current date
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = endDateTime - now;

  // Calculate remaining days and hours
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // Format the result
  const formattedResult = `${days} days ${hours} hours`;

  return formattedResult;
}

export function priceFormat(price) {
  return Number(price).toFixed(2);
}

export function getDirections(locationInfo) {
  var geoPosition = locationInfo.geo_lat + "," + locationInfo.geo_lng;

  var gMapUrl =
    "https://maps.google.com/?saddr=" +
    "" +
    "&center=" +
    geoPosition +
    "&daddr=" +
    encodeURIComponent(locationInfo.address) +
    "&directionsmode=driving&mapmode=streetview&zoom=10";

  if (locationInfo.geo_lat != 0 && locationInfo.geo_lng != 0) {
    gMapUrl = gMapUrl + "&saddr=" + geoPosition;
  }
  return gMapUrl;
}

export function goToEvent(eventId, eventName) {
  return `/event/index/${eventId}/${eventName
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+$/, "")}`;
}
