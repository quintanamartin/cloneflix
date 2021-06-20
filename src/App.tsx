import React from "react";

import Row from "./components/Row";
import Heading from "./ui/Heading";
import movieRequests from "./api";

function App() {
  return (
    <div className="App">
      <Heading />
      <Row title="Trending" urlFetch={movieRequests.fetchTrending} />
      <Row title="Top Rated" urlFetch={movieRequests.fetchTopRated} />
    </div>
  );
}

export default App;
