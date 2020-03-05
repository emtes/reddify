const getToken = () => {
  const params = new URLSearchParams(window.location.hash);
  const token = params.get("#access_token");
  return token;
};

const getTopSongs = async token => {
  const topSongEndpoint = "https://api.spotify.com/v1/me/top/tracks";
  const spotifyInit = {
    headers: {
      Authorization: "Bearer " + token
    }
  };
  const response = await fetch(topSongEndpoint, spotifyInit);
  const json = await response.json();
  const tracks = await json.items;
  return tracks;
};

const getSongLyrics = async song => {
  let songName = song.name;
  let artist = song.artists[0].name;
  let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songName}`);
  let json = await response.json();
  let lyrics = await json.lyrics;
  return lyrics;
};

const reqNounLamda = async text => {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const lamdaEndpoint =
    "https://fpjbim7s0k.execute-api.us-east-2.amazonaws.com/default/reddifyMySpotify";
  return makeRequest("POST", corsAnywhere + lamdaEndpoint, text);
};

const makeRequest = async (method, url, data) => {
  const reqInit = {
    method: method,
    body: JSON.stringify({
      body: data
    }),
    headers: {
      "Content-Type": " application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  const response = await fetch(url, reqInit);
  const json = await response.json();
  return json;
};

const recommendCommunities = async () => {
  const token = getToken();
  const topSongs = await getTopSongs(token);
  const lyrics = await getSongLyrics(topSongs[0]); // switch to all
  const keyword = await reqNounLamda(lyrics); // should be arr of words in final
  const rawCommunities = await Reddit.getCommunitiesByKeyword(keyword);
  console.log("Raw: ", rawCommunities);
  const communities = await Reddit.cleanCommunitiesResponse(rawCommunities);
  return communities;
};

recommendCommunities();
