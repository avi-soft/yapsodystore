const request = {
  getVenueDetails: "online/get_venue",
  getEvents: "online/events",
  getLanguage: "languages",
  getLanguageTranslation: "languages/translations?lang=hi",
  singleEvent: (eventId) => `online/events/${eventId}`,
  singleEventPerformances: (eventId) => `online/events/${eventId}/performances`,
};
export default request;
