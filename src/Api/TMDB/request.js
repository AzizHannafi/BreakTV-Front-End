

const API_KEY= process.env.REACT_APP_TMDB_API_KEY
//const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchImage:'https://image.tmdb.org/t/p/original',
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`,
    fetchRemanceMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`,
    fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=99`,
}

export default requests;