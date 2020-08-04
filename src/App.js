import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Movies in theater"
        fetchUrl={request.fetchMoviesInTheater}
        isLargeRow
      />

      <Row title="Popular Movies" fetchUrl={request.fetchPopularMovies} />

      <Row title="Top R rated movies" fetchUrl={request.fetchRRatedMovies} />

      <Row
        title="Best movies of the year"
        fetchUrl={request.fetchBestMoviesYear}
      />
    </div>
  );
}

export default App;
