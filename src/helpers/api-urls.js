const request = {
  venueDetails: "online/get_venue",
  events: "online/events",
  language: "languages",
  languageTranslation: "languages/translations?lang=hi",
  faq: "online/settings/faqs",
  singleEventPerformances: (eventId) => `online/events/${eventId}/performances`,
  singleEvent: (eventId) => `online/events/${eventId}`,
  singlePerformanceSection: (eventId, dateId) => {
    return `online/events/${eventId}/performances/${dateId}/sections`;
  },
  singlePerformancePricing: (eventId, dateId) => {
    return `online/events/${eventId}/performances/${dateId}/pricing_info`;
  },
};
export default request;
