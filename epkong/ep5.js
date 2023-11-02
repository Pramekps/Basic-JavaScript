function convertToOffsetTime(utcTimestamp) {
    const utcDate = new Date(utcTimestamp);
    utcDate.setHours(utcDate.getHours() + 7); // Add +7 hours offset
    return utcDate.toISOString();
  }
  
  // Example usage
  const utcTimestamp = (new Date()).toISOString();
  const localTimeWithOffset = convertToOffsetTime(utcTimestamp);
  
  console.log("UTC Timestamp:", utcTimestamp);
  console.log("Local Time with +7 hours offset:", localTimeWithOffset);
  