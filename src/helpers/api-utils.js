const BASE_URL = process.env.YAPSODY_API_BASE_URL;
import request from "./api-urls";

const BaseUrl =
  process.env.ENV === "dev"
    ? "https://stage-api.yapsody.com/"
    : "https://api.yapsody.com/";

const headerData = {
  headers: {
    "venue-code": "myblog",
  },
};

export async function getData(...config) {
  try {
    const [url, headerData = {}] = config;
    const response = await fetch(url, headerData);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
}
export async function getEventDetails() {
  const eventData = await getData(BaseUrl + request.getEvents, {
    ...headerData,
    next: { revalidate: 5 },
  });
  return eventData.data.events;
}

export async function getThemeData() {
  const themeLayout = await getData(BaseUrl + request.getVenueDetails, {
    ...headerData,
    next: { revalidate: 10 },
  });
  const {
    faq_count,
    test_mode,
    language_code,
    venue_code,
    name,
    venue_page_setup,
    venue_settings,
    company_details,
  } = themeLayout.data;
  const {
    background_image_url,
    newci_text,
    newci_buttonlink,
    newci_background,
    newci_inner_background,
    newci_heading,
    header_position,
    top_image,
    logo_image,
    title_text,
  } = venue_page_setup;
  const {
    trans_time_out,
    facebook_url,
    twitter_url,
    instagram_url,
    website_url,
  } = venue_settings;
  const {
    support_url,
    terms_url,
    privacy_url,
    name: companyName,
  } = company_details;
  return {
    venueName: name,
    venueCode: venue_code,
    langCode: language_code,
    testMode: test_mode,
    backgroundImage: background_image_url,
    textColor: newci_text,
    buttonLinkBoxBorderColor: newci_buttonlink,
    headingColor: newci_heading,
    boxBackgroundColor: newci_inner_background,
    storeBackground: newci_background,
    companyName: companyName,
    supportUrl: support_url,
    termsUrl: terms_url,
    privacyUrl: privacy_url,
    cartTimeOut: trans_time_out,
    facebookUrl: facebook_url,
    twitterUrl: twitter_url,
    instagramUrl: instagram_url,
    websiteUrl: website_url,
    headerAlignment: header_position,
    brandImage: top_image,
    mainHeadingImage: logo_image,
    mainHeadingText: title_text,
    faqCount: faq_count,
  };
}
