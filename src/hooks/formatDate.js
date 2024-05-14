export default function formatDate(dateString) {
  // Split the date string into year, month, day, hours, and minutes
  const [year, month, day, hours, minutes] = dateString.split(/[-T:]/);

  // Create a Date object with the parsed year, month (minus 1 as months are zero-based), day, hours, and minutes
  const date = new Date(year, month - 1, day, hours, minutes);

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

  // Get the hours in 12-hour format and determine whether it's AM or PM
  let formattedHours = date.getHours() % 12 || 12;
  const period = date.getHours() < 12 ? "AM" : "PM";

  // Get the minutes with leading zeros if needed
  const formattedMinutes = String(date.getMinutes()).padStart(2, "0");

  // Construct the formatted time string with AM or PM
  const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

  return { date: formattedDate, time: formattedTime };
}
