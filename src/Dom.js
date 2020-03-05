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
	    <img src="${card.data.community_icon}" class="img-responsive">
	  </div>
	  <div class="card-header">
	    <div class="card-title h5">${name}</div>
	    <div class="card-subtitle text-gray">${card.data.lifestyles}</div>
	  </div>
	  <div class="card-body">
		${card.data.public_description}
	  </div>
	  <div class="card-footer">
	    <button class="btn btn-primary"><a src="https://reddit.com/${commName}"></a></button>
	  </div>
	</div>
  `;
  }
  static paintSubReddit(arr){
  	let paintArea = document.getElementById('cardArea')
  	arr.forEach(card =>{
  		paintArea.innerHTML += Dom.createRedditCard(card)
  	})
  }
}
