import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./SeasonDisplay";
import Spinner from "./Spinner";

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  let content;
  if (!errorMessage && lat) {
    content = <DisplaySeason latitude={lat} />;
  } else if (errorMessage && !lat) {
    content = <div>Error: {errorMessage}</div>;
  } else {
    content = <Spinner message="Please accept location request" />;
  }
  return content;
};

ReactDOM.render(<App />, document.getElementById("root"));
