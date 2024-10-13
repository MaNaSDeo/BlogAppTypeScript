export const getUserLocation = (): string => {
  // In a real app, this would use an IP geolocation service
  // For this example, we'll just return a random location
  const locations = ["US", "FR", "DE", "JP", "AU"];
  return locations[Math.floor(Math.random() * locations.length)];
};
