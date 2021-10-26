const API_KEY ="0ea5889f77ed9660944da090003e9ff8";

const requests={
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated:`/movies/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=1079`,
fetchDacumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests; 