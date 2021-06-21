import React from "react";

import Banner from "./components/Banner";
import NavBar from "./ui/NavBar";
import Row from "./components/Row";
import movieRequests from "./api";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Row title="Popular" urlFetch={movieRequests.fetchPopular} /> */}
      <Banner />
      <Row isLargeRow title="Trending" urlFetch={movieRequests.fetchTrending} />
      <Row title="Top Rated" urlFetch={movieRequests.fetchTopRated} />
      <Row title="Action movies" urlFetch={movieRequests.fetchAction} />
      <Row title="Horror movies" urlFetch={movieRequests.fetchHorror} />
      <Row title="Western movies" urlFetch={movieRequests.fetchWestern} />
      <Row title="Thrillers" urlFetch={movieRequests.fetchThriller} />
      <Row title="Comedy movies" urlFetch={movieRequests.fetchComedies} />
      <Row title="Animation" urlFetch={movieRequests.fetchAnimation} />
      <Row title="Documentary" urlFetch={movieRequests.fetchDocumentaries} />
    </div>
  );
}

export default App;
