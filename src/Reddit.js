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
    return communities.map((comm) => {
      return {
        commName: comm.display_name,
        commNamePrefixed: comm.display_name_prefixed,
        name: comm.name,
        id: comm.id,
        subscriberCount: comm.subscribers,
        description: comm.description,
        over18: comm.over18,
        url: "https://www.reddit.com/" + comm.url,
      }
    })
  }
}
