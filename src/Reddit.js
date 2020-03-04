class Reddit {
  constructor(){}

  static getCommunitiesByKeyword = async function (keyword) {
    const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/"
    const queryUrl = `http://api.reddit.com/r/?q=${keyword}`
    const res = await fetch(corsAnywhereUrl + queryUrl)
    const json = await res.json()
    const communities = json.children
    return communities
  }

  static cleanCommunitiesResponse = function(communities) {
    /*
    keep:
      display_name
      display_name_prefixed
      name
      id
      subscribers
      description
      over18
      url
    */
  }
}
