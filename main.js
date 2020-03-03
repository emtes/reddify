var SpotifyWebApi = require('spotify-web-api-node');

console.log("Hello, world!");
const params = new URLSearchParams(window.location.hash);
const token = params.get("#access_token");
console.log(token);

var spotifyApi = new SpotifyWebApi()
spotifyApi.setAccessToken(token);
