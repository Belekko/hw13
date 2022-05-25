import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );

      const data = await response.json();
      setState(data);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {state.map((el) => {
        return (
          <div className="block" key={el.id}>
            <header>
              {el.title} <span>{el.id}</span>
            </header>
            <span>{el.albumId}</span>
            <div>{el.thumbnailUrl}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
// https://jsonplaceholder.typicode.com/photos?_limit=10
