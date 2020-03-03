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
+ More optional stuff...

IF user grants access:: final URL will contain **hash fragment** used for subsequent calls to Spotify
*/

function toSpotifyAccServices() {
  const creds = {
    client_id: "20072dfe69e4443ab2981969b901cbae",
    response_type: "token",
    redirect_uri: "https%3A%2F%2Femtes.github.io%2Ftest%2Fmain"
  };

  let reqAuth = `https://accounts.spotify.com/authorize?client_id=${creds.client_id}&redirect_uri=${creds.redirect_uri}&response_type=${creds.response_type}`;
  window.location = reqAuth;
}
