const apiURL = `${process.env.REACT_APP_APIURL}`;

const getPosts = () =>
    fetch(apiURL)
    .then(response => response.json())
    .then(jsonData => jsonData.posts);

const addPost = (jsonBody) =>
    fetch(apiURL, {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonBody)
    })
    .then(response => response.json())

const updatePost = (postID,jsonBody) =>
    fetch(`${apiURL}/${postID}`, {
      method: 'PUT', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonBody)
    })
    .then(response => response.json())

const deletePost = (postID) =>
    fetch(`${apiURL}/${postID}`, {
      method: 'DELETE', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: postID})
    })
    .then(response => response.json())

export { getPosts, addPost, updatePost, deletePost };

