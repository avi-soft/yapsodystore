export function getTimeDifferenceFormatted(
  startDatetimeString,
  endDatetimeString
) {
  const startDate = new Date(startDatetimeString);
  const endDate = new Date(endDatetimeString);

  const timeDifference = endDate - startDate;

  // Calculate days, hours, and minutes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // Construct the formatted string
  const formattedString = `${days} Days ${hours} hours`;

  return formattedString;
}
