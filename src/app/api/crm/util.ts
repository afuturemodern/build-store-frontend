const BASE_HUBSPOT_URL_ENDPOINT = "https://api.hubapi.com";
export const HUBSPOT_CONTACT_ENDPOINT =
  BASE_HUBSPOT_URL_ENDPOINT + "/crm/v3/objects/contacts";
export const HUBSPOT_DEALS_ENDPOINT =
  BASE_HUBSPOT_URL_ENDPOINT + "/crm/v3/objects/deals";
export const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
