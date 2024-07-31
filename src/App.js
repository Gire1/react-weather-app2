import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{""}
          <a
            href="https://github.com/Gire1/react-weather-app2"
            target="_blank"
            rel="noreferrer"
          >
            Grace Chifamba
          </a>{" "}
          and is{""}
          <a
            href="https://sparkly-beignet-9857df.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
