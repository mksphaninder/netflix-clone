const APIKEY = '8c2dd983caac652f8e7720e890934e67';

const request = {
    fetchMoviesInTheater: `/discover/movie?api_key=${APIKEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
    fetchPopularMovies: `/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc`,
    fetchRRatedMovies: `/discover/movie/?api_key=${APIKEY}&certification_country=US&certification=R&sort_by=vote_average.desc`,
    fetchBestMoviesYear: `/discover/movie?api_key=${APIKEY}&primary_release_year=2010&sort_by=vote_average.desc`
}

export default request;