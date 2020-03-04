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
        commName: comm.data.display_name,
        commNamePrefixed: comm.data.display_name_prefixed,
        name: comm.data.name,
        id: comm.data.id,
        subscriberCount: comm.data.subscribers,
        description: comm.data.description,
        over18: comm.data.over18,
        url: "https://www.reddit.com/" + comm.data.url,
      }
    })
  }
}
