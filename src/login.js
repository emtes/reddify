function toSpotifyAccServices() {
  const creds = {
    client_id: "20072dfe69e4443ab2981969b901cbae",
    response_type: "token",
    redirect_uri: "https%3A%2F%2Femtes.github.io%2Ftest%2Fmain.html",
    scope: "user-top-read%20user-library-read"
  };

  let reqAuth = `https://accounts.spotify.com/authorize?client_id=${creds.client_id}&redirect_uri=${creds.redirect_uri}&response_type=${creds.response_type}&scope=${creds.scope}`;
  window.location = reqAuth;
}
