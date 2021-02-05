import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const weatherPair = [
  { color: "#b11224", weather: "Stormy" },
  { color: "#fff200", weather: "Sunny" },
  { color: "#2f9fd7", weather: "Snowy" },
  { color: "#31ac55", weather: "Rainy" },
  { color: "#f26f22", weather: "Cloudy" },
  { color: "#603a34", weather: "Windy" },
];

const getRandomPairIndex = () => {
  return Math.floor(Math.random() * Math.floor(weatherPair.length));
};

function App() {
  const [pairIndex, setPairIndex] = useState(getRandomPairIndex());

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        setPairIndex((oldIndex) => {
          let newIndex = getRandomPairIndex();
          while (newIndex === oldIndex) {
            newIndex = getRandomPairIndex();
          }
          return newIndex;
        });
      }
    });
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: weatherPair[pairIndex].color }}
    >
      <h1>{weatherPair[pairIndex].weather}</h1>
    </div>
  );
}

export default App;
