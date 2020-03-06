class Dom {
  constructor() {}

  static drawSongCards(songsArr) {
    songsArr.forEach(song => {
      let cardHtml = ``;
    });
  }
  static createRedditCard(card) {
    return `
	  <div class="card">
	  <div class="card-image">
	    <img src="${card.icon}" class="img-responsive">
	  </div>
	  <div class="card-header">
	    <div class="card-title h5">${card.commNamePrefixed}</div>
	    <div class="card-subtitle text-gray">${card.data.lifestyles}</div>
	  </div>
	  <div class="card-body">
		${card.description}
	  </div>
	  <div class="card-footer">
	    <button class="btn btn-primary"><a src="${card.url}"></a></button>
	  </div>
	</div>
  `;
  }
  static paintSubReddit(arr){
  	let paintArea = document.getElementById('cardArea')
  	return arr.forEach(card =>{
  		paintArea.innerHTML += Dom.createRedditCard(card)
  	})
  }
}
