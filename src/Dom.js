class Dom {
  constructor() {}

  static drawSongCards(songsArr) {
    songsArr.forEach(song => {
      let cardHtml = ``;
    });
  }
  static createRedditCard(card) {
  	if(card.description.length() > 300){
  		card.description = card.description.substr(0,300) + "etc..."
  	}
    return `
	  <div class="card column col-3">
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
	    <button class="btn btn-primary"><a src="${card.url}">To Subreddit</a></button>
	  </div>
	</div>
  `;
  }
  static paintSubReddit(arr){
  	let paintArea = document.getElementById('cardArea')
  	arr.forEach(card =>{
		let toAdd = Dom.createRedditCard(card)
  		paintArea.innerHTML += toAdd
  	})
  }
}
