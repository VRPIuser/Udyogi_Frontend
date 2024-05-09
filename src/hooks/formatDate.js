export default function formatDate(dateString) {
  // Split the date string into year, month, and day
  const [year, month, day] = dateString.split("-");

  // Create a Date object with the parsed year, month (minus 1 as months are zero-based), and day
  const date = new Date(year, month - 1, day);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month name from the month number (zero-based)
  const monthName = monthNames[date.getMonth()];

  // Get the day of the month with leading zero if needed
  const formattedDay = String(date.getDate()).padStart(2, "0");

  // Construct the formatted date string
  const formattedDate = `${monthName} ${formattedDay}, ${year}`;

  return formattedDate;
}
