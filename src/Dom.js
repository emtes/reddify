class Dom {
  constructor() {}

  static createSongCard(song,keyword) {
  	return `
  	<div class="card column col-3">
	  <div class="card-image">
	    <img src="${song.album.images[1]}" class="img-responsive">
	  </div>
	  <div class="card-header">
	    <div class="card-title h5">${song.name}</div>
	    <div class="card-subtitle text-gray">Subscribers ${song.artist[0].name}</div>
	  </div>
	  <div class="card-body">
		From "${song.album.name}"
	  </div>
	</div>`

  }
  static createRedditCard(card) {
    return `
	  <div class="card column col-6">
	  <div class="card-image">
	    <img src="${card.icon}" class="img-responsive">
	  </div>
	  <div class="card-header">
	    <div class="card-title h5">${card.commNamePrefixed}</div>
	    <div class="card-subtitle text-gray">Subscribers ${card.subscriberCount}</div>
	  </div>
	  <div class="card-body">
		${card.description}
	  </div>
	  <div class="card-footer">
	    <a href="${card.url}"><button class="btn btn-primary">To Subreddit</button></a>
	  </div>
	</div>
  `;
  }
  static paintSubReddit(arr){
  	let cardArea = document.getElementById('cardArea')
  	arr.forEach(card =>{
		let toAdd = Dom.createRedditCard(card)
  		cardArea.innerHTML += toAdd
  	})
  }
  static paintSong(song,keyword){
  	console.log(song)
  	let songArea = document.getElementById('songArea')
  	let toAdd = Dom.createSongCard(song[0])
  	songArea.innerHTML += toAdd
  }
}
