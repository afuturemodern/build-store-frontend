import { HUBSPOT_ACCESS_TOKEN, HUBSPOT_CONTACT_ENDPOINT } from "./util";

export async function POST(request: Request) {
  const formResult = await request.json();

  const body = JSON.stringify({ properties: formResult });

  const contactRequestResponse = await fetch(HUBSPOT_CONTACT_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body,
  }).then((result) => {
    return result.json();
  });

  console.log(contactRequestResponse);

  return Response.json({ hello: "world" });
}
