const APIKEY = "83b135cd7e7ff2ddb7297d0e8b4540c2";
const movieRequests = {
  fetchTrending: `/trending/movie/week?api_key=${APIKEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&page=1`,
  fetchPopular: `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
  fetchAction: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  fetchHorror: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
  fetchWestern: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37`,
  fetchThriller: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53`,
  fetchComedies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
  fetchAnimation: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
};

export default movieRequests;
