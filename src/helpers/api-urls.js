const request = {
  venueDetails: "online/get_venue",
  events: "online/events",
  language: "languages",
  languageTranslation: "languages/translations?lang=hi",
  singleEventPerformances: (eventId) => `online/events/${eventId}/performances`,
};
export default request;
