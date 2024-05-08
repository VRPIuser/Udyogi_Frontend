const DivideWithFullStop = (text) => {
  // Ensure text is not null or undefined
  if (!text) return [];

  // Split the text using the full stop as the delimiter
  const result = text.split(".");

  // Filter out empty strings from the result
  const filteredResult = result.filter((str) => str.trim() !== "");

  return filteredResult;
};

export default DivideWithFullStop;
