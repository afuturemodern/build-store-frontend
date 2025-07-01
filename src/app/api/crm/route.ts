import { NextRequest } from "next/server";
import { HUBSPOT_ACCESS_TOKEN, HUBSPOT_CONTACT_ENDPOINT } from "./util";
import { validateContactRequest } from "./validation";

export async function POST(request: NextRequest) {
  try {
    // Validate request
    const validation = await validateContactRequest(request);
    
    if (!validation.isValid) {
      return Response.json(
        { error: true, message: "Invalid request data" },
        { status: 400 }
      );
    }

    if (!HUBSPOT_ACCESS_TOKEN) {
      return Response.json(
        { error: true, message: "Service configuration error" },
        { status: 500 }
      );
    }

    const body = JSON.stringify({ properties: validation.data });

    const contactRequestResponse = await fetch(HUBSPOT_CONTACT_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: body,
    });

    const responseData = await contactRequestResponse.json();

    if (!contactRequestResponse.ok || responseData.status === "error") {
      return Response.json(
        { error: true, message: "Failed to process request" },
        { status: 500 }
      );
    }

    return Response.json({ error: false });
  } catch (error) {
    return Response.json(
      { error: true, message: "An error occurred" },
      { status: 500 }
    );
  }
}
