const HUBSPOT_ENDPOINT_URL = "https://api.hubapi.com/crm/v3/objects/contacts";
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

// export async function GET(request: Request) {
//   fetch(HUBSPOT_ENDPOINT_URL, {
//     headers: {
//       Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//   });
//   return Response.json({ hello: "world" });
// }

export async function POST(request: Request) {
  const formResult = await request.json();

  const body = JSON.stringify({"properties": formResult})

  // console.log(body)

  const fetchResult = await fetch(HUBSPOT_ENDPOINT_URL, {
    headers: {
      Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body
  });

  console.log(fetchResult);

  return Response.json({ hello: "world" });
}
