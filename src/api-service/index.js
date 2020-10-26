
  const parseJson = (response) => response.json().then((data) => {
      return data
  });


  function createRequest(resourcePath){
    const URL= `https://hacker-news.firebaseio.com/v0/${resourcePath}.json`
    return fetch(URL)
    .then(parseJson);
  }

  const hackerNewsAPI = {
    allStoriesId: () => createRequest(`topstories`),
    item: (id) => createRequest(`item/${id}`),
    user: (id) => createRequest(`user/${id}`),
  } 

  export default hackerNewsAPI;