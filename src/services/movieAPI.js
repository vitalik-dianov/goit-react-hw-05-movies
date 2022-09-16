import axios from 'axios';

const API_KEY = '0d2fc6d2597c3f501e7437cf40d08b03';

export async function getTrending() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetails(movieId) {
  try {
    const response = await axios.get(`
        https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}
        `);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCredits(movieId) {
  try {
    const response = await axios.get(`
      https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}
      `);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getReviews(movieId) {
  try {
    const response = await axios.get(`
      https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}
      `);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getOnQuery(query) {
  try {
    const response = await axios.get(`
      https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US
      `);
    // console.log(response);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
