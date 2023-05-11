import axios from "axios";
import { API_KEY } from "../config/config";

export const fetchMovies = async (callbackfn, page, genreId) => {
  try {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreId}`);

    console.log(data);

    callbackfn(data.results.slice(0, data.results.length - 2));
  } catch (error) {
    console.log(error);
  }
};
