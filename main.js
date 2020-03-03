console.log("Hello, world!");
const params = new URLSearchParams(window.location.hash);
const token = params.get("#access_token");
console.log(token);
const lambda ='https://cors-anywhere.herokuapp.com/https://fpjbim7s0k.execute-api.us-east-2.amazonaws.com/default/reddifyMySpotify'

//Get Users Top Song
const getTopSong = (token) =>{
	return fetch("https://api.spotify.com/v1/me/top/tracks", {
		headers: {
		'Authorization': 'Bearer ' + token
		}
	})
	.then(res => res.json())
	.then(json => json.items[0])
	.then(track =>  getSongLyrics(track))
}

//Song lyrics request
const getSongLyrics = (songInfo) =>{
  console.log(songInfo)
   let song = songInfo.name
   let artist = songInfo.artists[0].name
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
  	.then(res => res.json())
    .then(info => info.lyrics)
  	.then(lyrics => makeRequest('POST',lambda, lyrics))
  	// .then(keyword => getSubreddits(keyword))
 }


//Send response to lambda
 const makeRequest =  async (method,url,lyrics) =>{
	const response = await fetch(url, {
		method: method,
		body: JSON.stringify({
			body: lyrics
		}),
		headers:{
			'Content-Type': ' application/json'
		}
	})
	console.log(await response.json())
}

//Request subreddits from reddit
const getSubreddits = async (keyword) =>{
	return fetch(`https://cors-anywhere.herokuapp.com/http://api.reddit.com/r/?q=${keyword}`)
		.then(info => console.log(info.json()))
}
