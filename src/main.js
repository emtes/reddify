console.log("Hello, world!");
const params = new URLSearchParams(window.location.hash);
const token = params.get("#access_token");
console.log(token);
const lambda ='https://cors-anywhere.herokuapp.com/https://fpjbim7s0k.execute-api.us-east-2.amazonaws.com/default/reddifyMySpotify'


//Get Users Top Song
const getTopSong = async (token) =>{
	const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
		headers: {
		'Authorization': 'Bearer ' + token
		}
	})
	const json = await response.json()
	const track = await json.items
	return await getSongLyrics(track)
}

//Song lyrics request
const getSongLyrics = async (songInfo) =>{
   let song = songInfo[0].name
   let artist = songInfo[0].artists[0].name
   let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
   let json = await response.json()
   let lyrics = await json.lyrics
   return await makeRequest('POST',lambda, lyrics)
 }

//Send response to lambda
 const makeRequest =  async (method,url,lyrics) =>{
	const response = await fetch(url, {
		method: method,
		body: JSON.stringify({
			body: lyrics
		}),
		headers:{
			'Content-Type': ' application/json',
			"Access-Control-Allow-Origin": "*"

		}
	})
	return await response.json()
}