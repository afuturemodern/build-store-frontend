import { error } from "console";
import {
  HUBSPOT_ACCESS_TOKEN,
  HUBSPOT_CONTACT_ENDPOINT,
  HUBSPOT_DEAL_TYPE_ID_INITIAL_OUTREACH,
  HUBSPOT_DEALS_ENDPOINT,
} from "./util";
import { logger } from "@/utils/logger";

export async function POST(request: Request) {
  const formResult = await request.json();

  const { firstname, lastname, email, phone, project_description } = formResult;

  const contactBody = JSON.stringify({
    properties: { firstname, lastname, email, phone },
  });

  const contactRequestResponse = await fetch(HUBSPOT_CONTACT_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: contactBody,
  }).then((result) => {
    return result.json();
  });

  if (contactRequestResponse.status === "error") {
    logger.error("hubspot api error");
    return Response.json({ error: true });
  }

  if (!contactRequestResponse.id) {
    logger.error("hubspot contact id error");
    return Response.json({ error: true });
  }

  // create a deal
  // associate deal with contact

  const dealBody = JSON.stringify({
    properties: {
      dealname: contactRequestResponse.properties.firstname + "'s Deal", // This is usually required
      dealstage: HUBSPOT_DEAL_TYPE_ID_INITIAL_OUTREACH, // Or another valid stage
      pipeline: "default", // Or your specific pipeline ID
      // amount: "1000", // Deal amount
      // closedate: "2024-12-31", // Close date in YYYY-MM-DD format
      description: project_description,
    },

    associations: [
      {
        to: {
          id: contactRequestResponse.id,
        },
        types: [
          {
            associationCategory: "HUBSPOT_DEFINED",
            associationTypeId: 3,
          },
        ],
      },
    ],
  });

  const dealRequestResponse = await fetch(HUBSPOT_DEALS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: dealBody,
  }).then((result) => {
    return result.json();
  });

  if (dealRequestResponse.status === "error") {
    logger.error("hubspot deal request error");
    return Response.json({ error: true });
  }

  return Response.json({ error: false });
}
