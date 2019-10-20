const apiCall = `${process.env.REACT_APP_APIURL}`;

const getPosts = () =>
    fetch(apiCall)
    .then(response => response.json())
    .then(jsonData => jsonData.posts);



export { getPosts };

