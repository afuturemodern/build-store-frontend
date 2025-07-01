import { NextRequest } from "next/server";
import { HUBSPOT_ACCESS_TOKEN, HUBSPOT_CONTACT_ENDPOINT } from "./util";
import { validateContactRequest } from "./validation";
import { rateLimiter } from "./rateLimiter";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    
    const { allowed, remainingRequests } = rateLimiter.check(clientIp);
    
    if (!allowed) {
      return Response.json(
        { error: true, message: "Too many requests. Please try again later." },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60'
          }
        }
      );
    }
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

    return Response.json(
      { error: false },
      {
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': remainingRequests.toString()
        }
      }
    );
  } catch (error) {
    return Response.json(
      { error: true, message: "An error occurred" },
      { status: 500 }
    );
  }
}
