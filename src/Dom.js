class Dom {
  constructor() {}

  static drawSongCards(songsArr) {

    songsArr.forEach(song => {
    	let cardHtml = `
		<div class="card">
      		<div class="card-image">
        		<img src="#" alt="[[SONG COVER ART]]" class="img-responsive">
      		</div>

      		<div class="card-header">
        		<div class="card-title h5">[[SONG NAME]]</div>
      			<div class="card-subtitle text-gray">[[ARTIST]]</div>
      		</div>
  
      		<div class="card-footer">
        		<button class="btn btn-primary">See in Spotify</button>
      		</div>
    	</div>
      `;
    });
  }



}
