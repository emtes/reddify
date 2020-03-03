/*
Target user: Browser, entirely JavaScript application
Summary:
- Direct user to Spotify Accounts Service

Steps:
1. Redirect users to the `/authorize` endpoint (accounts service)
`GET https://accounts.spotify.com/authorize`
REQUEST Query Parameters:
`client_id`: required -- provided by Spotify for our application
`response_type`: required -- set to "token"
`redirect_uri`: required -- where to redirect after user grants/denies permissions
+ More optional shit...

IF user grants access:: final URL will contain **hash fragment** used for subsequent calls to Spotify
*/

function toSpotifyAccServices() {
  const curLoc = window.location;
  const creds = {
    client_id: "20072dfe69e4443ab2981969b901cbae",
    response_type: "token",
    redirect_uri: ""
  };

  let reqAuth = "https://accounts.spotify.com/authorize?";
  for (let param in creds) {
    param += "=";
    reqAuth += param + creds[param] + "&";
  }
}
