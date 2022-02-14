import axios from 'axios';

const getPhotosServices = (pageSize, currentPage) => {
  return axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1&per_page=${pageSize}&page=${currentPage}`
    )
    .then(data => data.data.photos)
    .catch(err => console.log(err));
};

export default getPhotosServices;
